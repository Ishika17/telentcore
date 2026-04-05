import {
  createSlice,
  createEntityAdapter,
  createSelector,
  PayloadAction,
} from "@reduxjs/toolkit";

import { selectSelectedJd, JdsFeatureState } from "./jdsSlice";

import { supabase } from "@/lib/supabaseClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface RawSupabaseCandidate {
  id: string | number;
  skills?: string | string[] | null;
  full_name?: string;
  total_experience_years?: number;
  headline?: string;
  email?: string;
}

export const fetchCandidatesFromSupabase = createAsyncThunk(
  "candidates/fetchFromSupabase",
  async (_, { rejectWithValue }) => {
    const PAGE_SIZE = 1000;
    let allData: RawSupabaseCandidate[] = [];
    let from = 0;
    let hasMore = true;

    while (hasMore) {
      const { data, error } = await supabase
        .from("candidates")
        .select("*")
        .range(from, from + PAGE_SIZE - 1);


      if (error) return rejectWithValue(error.message);
      if (!data || data.length === 0) break;

      allData = [...allData, ...(data as unknown as RawSupabaseCandidate[])];
      hasMore = data.length === PAGE_SIZE;
      from += PAGE_SIZE;
    }

    console.log("TOTAL fetched:", allData.length); // 👈 debug

    const mappedCandidates: Candidate[] = allData.map((item) => {
      const rawSkills = item.skills;
      const skillsArray: string[] =
        typeof rawSkills === "string"
          ? rawSkills
              .replace(/[{}]/g, "")
              .split(",")
              .map((s) => s.trim())
          : (rawSkills as string[]) || [];

      return {
        id: String(item.id),
        name: item.full_name || "Unknown Candidate",
        skills: skillsArray,
        total_exp: item.total_experience_years || 0,
        appliedJdIds: [],
        role: item.headline || "No Headline",
        email: item.email || "",
      };
    });

    return mappedCandidates;
  },
);

/**
 * 1. INTERFACES & TYPES
 */
export interface Candidate {
  id: string;
  name: string;
  skills: string[];
  total_exp: number;
  appliedJdIds: string[];
  role?: string;
  email?: string;
  description?: string;
  status?: string;
}

export interface MatchedCandidate extends Candidate {
  matchScore: number;
  matchingSkills: string[];
}

interface CandidatesState {
  selectedCandidateId: string | null;
  selectedJdIdsByCandidate: Record<string, string[]>;
  loading: boolean;
  error: string | null;
}

/**
 * 2. ADAPTER CONFIGURATION
 */
const candidatesAdapter = createEntityAdapter<Candidate>();

/**
 * 3. THE SLICE
 */
const candidatesSlice = createSlice({
  name: "candidates",
  initialState: candidatesAdapter.getInitialState<CandidatesState>({
    selectedCandidateId: null,
    selectedJdIdsByCandidate: {},
    loading: false,
    error: null,
  }),
  reducers: {
    setCandidates: (state, action: PayloadAction<Candidate[]>) => {
      const unique = Array.from(
        new Map(action.payload.map((item) => [item.id, item])).values(),
      );
      candidatesAdapter.setAll(state, unique);
    },
    selectCandidate: (state, action: PayloadAction<string | null>) => {
      state.selectedCandidateId = action.payload;
    },
    setCandidateSelectedJd: (
      state,
      action: PayloadAction<{ candidateId: string; jdId: string }>,
    ) => {
      const { candidateId, jdId } = action.payload;
      const existing = state.selectedJdIdsByCandidate[candidateId] ?? [];

      if (!existing.includes(jdId)) {
        state.selectedJdIdsByCandidate[candidateId] = [...existing, jdId];
      }
    },
    setCandidatesLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateCandidateStatus: (
      state,
      action: PayloadAction<{ id: string; status: string }>,
    ) => {
      const { id, status } = action.payload;
      candidatesAdapter.updateOne(state, {
        id,
        changes: { status },
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCandidatesFromSupabase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCandidatesFromSupabase.fulfilled, (state, action) => {
        state.loading = false;
        const unique = Array.from(
          new Map(action.payload.map((item) => [item.id, item])).values(),
        );
        candidatesAdapter.setAll(state, unique);
      })
      .addCase(fetchCandidatesFromSupabase.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) || "Failed to fetch candidates";
      });
  },
});

export const {
  setCandidates,
  selectCandidate,
  setCandidateSelectedJd,
  setCandidatesLoading,
  updateCandidateStatus,
} = candidatesSlice.actions;

export default candidatesSlice.reducer;

/**
 * 4. FEATURE STATE TYPES
 */
export type CandidatesFeatureState = {
  candidates: ReturnType<typeof candidatesSlice.reducer>;
};

type MappingState = CandidatesFeatureState & JdsFeatureState;

/**
 * 5. SELECTORS
 */
export const {
  selectAll: selectAllCandidates,
  selectEntities: selectCandidateEntities,
} = candidatesAdapter.getSelectors(
  (state: CandidatesFeatureState) => state.candidates,
);

export const selectSelectedCandidate = (state: CandidatesFeatureState) => {
  const { selectedCandidateId, entities } = state.candidates;
  return selectedCandidateId ? entities[selectedCandidateId] : null;
};

export const selectSelectedJdIdsForCandidate = (state: CandidatesFeatureState) => {
  const { selectedCandidateId, selectedJdIdsByCandidate } = state.candidates;
  if (!selectedCandidateId) return null;
  return selectedJdIdsByCandidate[selectedCandidateId] ?? [];
};

/**
 * 6. MATCH ENGINE
 */
export const selectMatchedCandidates = createSelector(
  [
    selectAllCandidates,   
    (state: MappingState) => selectSelectedJd(state),
    (state: MappingState) => state.jds.filters.selectedSkills, // 👈 add this
  ],
  
  (allCandidates, selectedJd, selectedSkills): MatchedCandidate[] => {
    if (!selectedJd) {
      return allCandidates.map((c) => ({
        ...c,
        matchScore: 0,
        matchingSkills: [],
      }));
    }

    // Use selected skills as filter if any are active, otherwise use all JD skills
    const activeSkills =
      selectedSkills.length > 0 ? selectedSkills : selectedJd.skills;

    const jdSkills = new Set(activeSkills.map((s: string) => s.toLowerCase()));
    console.log("Active JD Skills for Matching:", activeSkills); 
    console.log("jdSkills" , jdSkills)// 👈 debug
    const jdMinExp = selectedJd.min_exp;

    // ---> PASTE THE CODE HERE <---
    const mapped: MatchedCandidate[] = allCandidates.map((candidate) => {
      // 1. Tell TS to treat candidate as an unknown object first, then assert it has skills
      const rawCandidate = candidate as unknown as {
        skills?: string | string[] | null;
      };
      const rawSkills = rawCandidate.skills;

      const skillsArray: string[] =
        typeof rawSkills === "string"
          ? rawSkills
              .replace(/[{}]/g, "")
              .split(",")
              .map((s: string) => s.trim())
          : (rawSkills as string[]) || [];

      const matchingSkills = skillsArray.filter((s) =>
        jdSkills.has(s.toLowerCase()),
      );

      // (Keep the rest of the file exactly as it was below this line!)
      const skillRatio =
        activeSkills.length > 0
          ? matchingSkills.length / activeSkills.length
          : 0;

      let score = skillRatio * 80;

      if (candidate.total_exp >= jdMinExp) {
        score += 20;
      } else if (candidate.total_exp >= jdMinExp - 2) {
        score += 10;
      }

      return {
        ...candidate,
        matchScore: Math.round(score),
        matchingSkills,
      };
    });

    return [...mapped].sort((a, b) => b.matchScore - a.matchScore);
  },
);

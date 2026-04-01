import {
  createSlice,
  createEntityAdapter,
  createSelector,
  PayloadAction,
  EntityState,
} from "@reduxjs/toolkit";
import { jds } from "@/generated";
import { selectSelectedJd } from "./jdsSlice";

/**
 * 1. DEFINE RIGID TYPES
 * This interface perfectly matches the 'JdsFeatureState' defined in jdsSlice.
 */
interface JdsFeatureState {
  jds: EntityState<jds, string> & {
    selectedJdId: string | null;
    searchQuery: string;
    loading: boolean;
    filters: {
      minExp: number;
      maxExp: number;
      selectedSkills: string[];
      status: "all" | "open" | "closed";
    };
    sortBy: "date" | "relevance" | "title";
  };
}

interface CandidateState {
  selectedCandidateId: string | null;
  loading: boolean;
}

// store/features/candidatesSlice.ts

export interface Candidate {
  id: string;
  name: string;
  skills: string[];
  total_exp: number;
  appliedJdIds: string[];
  role?: string;
  email?: string;
  description?: string;
}

export interface MatchedCandidate extends Candidate {
  matchScore: number;
  matchingSkills: string[];
}

/**
 * 2. ADAPTER & SLICE
 */
const candidatesAdapter = createEntityAdapter<Candidate>();

const candidatesSlice = createSlice({
  name: "candidates",
  initialState: candidatesAdapter.getInitialState<CandidateState>({
    selectedCandidateId: null,
    loading: false,
  }),
  reducers: {
    // CHANGE: Update action type to 'Candidate[]'
    setCandidates: (state, action: PayloadAction<Candidate[]>) => {
      candidatesAdapter.setAll(state, action.payload);
    },
    selectCandidate: (state, action: PayloadAction<string | null>) => {
      state.selectedCandidateId = action.payload;
    },
    setCandidatesLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCandidates, selectCandidate, setCandidatesLoading } =
  candidatesSlice.actions;

export default candidatesSlice.reducer;

/**
 * 3. SELECTORS (Requirement 5.2: Intelligent Mapping)
 */
type CandidatesFeatureState = {
  candidates: ReturnType<typeof candidatesSlice.reducer>;
};

// This represents the combined state needed for cross-slice selection
type MappingState = CandidatesFeatureState & JdsFeatureState;

export const { selectAll: selectAllCandidates } =
  candidatesAdapter.getSelectors(
    (state: CandidatesFeatureState) => state.candidates,
  );

/**
 * THE MATCH ENGINE
 * No more 'any' - we pass the MappingState which satisfies both slices.
 */
export const selectMatchedCandidates = createSelector(
  [selectAllCandidates, (state: MappingState) => selectSelectedJd(state)],
  (allCandidates, selectedJd): MatchedCandidate[] => {
    if (!selectedJd) {
      return allCandidates.map((c) => ({
        ...c,
        matchScore: 0,
        matchingSkills: [],
      }));
    }

    const jdSkills = new Set(selectedJd.skills.map((s) => s.toLowerCase()));
    const jdMinExp = selectedJd.min_exp;

    const mapped = allCandidates.map((candidate) => {
      const matchingSkills = candidate.skills.filter((s) =>
        jdSkills.has(s.toLowerCase()),
      );

      const skillRatio =
        selectedJd.skills.length > 0
          ? matchingSkills.length / selectedJd.skills.length
          : 0;

      // Skill match is 80% of the total score
      let score = skillRatio * 80;

      // Experience match is 20% of the total score
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

    // Requirement 5.2: Sort by Match Score (Highest first)
    return [...mapped].sort((a, b) => b.matchScore - a.matchScore);
  },
);

export const selectSelectedCandidate = (state: CandidatesFeatureState) => {
  const { selectedCandidateId, entities } = state.candidates;
  return selectedCandidateId ? entities[selectedCandidateId] : null;
};

// Also ensure you have the ID selector if your selectors.ts needs it:
export const selectSelectedCandidateId = (state: CandidatesFeatureState) =>
  state.candidates.selectedCandidateId;

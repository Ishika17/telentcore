import {
  createSlice,
  createEntityAdapter,
  createSelector,
  PayloadAction,
} from "@reduxjs/toolkit";
import { selectSelectedJd, JdsFeatureState } from "./jdsSlice";

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
});

export const {
  setCandidates,
  selectCandidate,
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

/**
 * Combine Candidates + JDs state correctly
 */
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

/**
 * 6. MATCH ENGINE
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

    const jdSkills = new Set(
      selectedJd.skills.map((s: string) => s.toLowerCase()),
    );
    const jdMinExp = selectedJd.min_exp;

    const mapped = allCandidates.map((candidate) => {
      const matchingSkills = candidate.skills.filter((s) =>
        jdSkills.has(s.toLowerCase()),
      );

      const skillRatio =
        selectedJd.skills.length > 0
          ? matchingSkills.length / selectedJd.skills.length
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

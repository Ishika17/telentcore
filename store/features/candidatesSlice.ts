import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";
import { candidates } from "@/generated/prisma";

// 1. Initialize the adapter
const candidatesAdapter = createEntityAdapter<candidates>();

// 2. Create the slice
const candidatesSlice = createSlice({
  name: "candidates",
  initialState: candidatesAdapter.getInitialState({
    selectedCandidateId: null as string | null,
  }),
  reducers: {
    // This handles the 3,000 candidates coming from the API
    setCandidates: candidatesAdapter.setAll,

    // Requirement 4.3: Action to select a candidate for the detail view
    selectCandidate: (state, action: PayloadAction<string | null>) => {
      state.selectedCandidateId = action.payload;
    },
  },
});

// --- CRITICAL: EXPORT THE ACTIONS ---
export const { setCandidates, selectCandidate } = candidatesSlice.actions;

export default candidatesSlice.reducer;

// --- SELECTORS ---
// Local state type to avoid circular dependency
type CandidateFeatureState = {
  candidates: ReturnType<typeof candidatesSlice.reducer>;
};

export const {
  selectAll: selectAllCandidates,
  selectById: selectCandidateById,
} = candidatesAdapter.getSelectors(
  (state: CandidateFeatureState) => state.candidates,
);

export const selectSelectedCandidate = (state: CandidateFeatureState) =>
  state.candidates.selectedCandidateId
    ? state.candidates.entities[state.candidates.selectedCandidateId]
    : null;

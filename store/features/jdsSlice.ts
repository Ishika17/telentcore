import {
  createSlice,
  createEntityAdapter,
  createSelector,
  PayloadAction,
} from "@reduxjs/toolkit";
import { jds } from "@/generated";

/**
 * 1. DEFINE ADAPTER FIRST
 * Requirement 7: Normalized State
 */
const jdsAdapter = createEntityAdapter<jds>({
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

/**
 * 2. DEFINE STATE INTERFACE
 */
interface JdState {
  selectedJdId: string | null;
  searchQuery: string;
  loading: boolean;
}

/**
 * 3. CREATE THE SLICE
 */
const jdsSlice = createSlice({
  name: "jds",
  initialState: jdsAdapter.getInitialState<JdState>({
    selectedJdId: null,
    searchQuery: "",
    loading: false,
  }),
  reducers: {
    setJds: (state, action: PayloadAction<jds[]>) => {
      jdsAdapter.setAll(state, action.payload);
    },
    selectJd: (state, action: PayloadAction<string | null>) => {
      state.selectedJdId = action.payload;
    },
    setJdSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

// Export Actions and Reducer
export const { setJds, selectJd, setJdSearchQuery, setLoading } =
  jdsSlice.actions;
export default jdsSlice.reducer;

/**
 * 4. SELECTORS (Requirement 6: Performance)
 * We use a "Minimal State" type here to avoid importing RootState.
 * This prevents the 'Circular Dependency' and 'Unknown' errors.
 */
type JdsFeatureState = {
  jds: ReturnType<typeof jdsSlice.reducer>;
};

// Base selectors
export const { selectAll: selectAllJDs, selectById: selectJdById } =
  jdsAdapter.getSelectors((state: JdsFeatureState) => state.jds);

// Memoized search selector for 2,000+ JDs
export const selectFilteredJDs = createSelector(
  [
    (state: JdsFeatureState) => selectAllJDs(state),
    (state: JdsFeatureState) => state.jds,
  ],
  (allJds, jdsState) => {
    const query = jdsState.searchQuery.toLowerCase().trim();
    if (!query) return allJds;

    return allJds.filter(
      (jd) =>
        jd.title.toLowerCase().includes(query) ||
        jd.skills.some((skill) => skill.toLowerCase().includes(query)),
    );
  },
);

// Selector for currently active job
export const selectSelectedJd = (state: JdsFeatureState) =>
  state.jds.selectedJdId ? state.jds.entities[state.jds.selectedJdId] : null;

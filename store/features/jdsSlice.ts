import {
  createSlice,
  createEntityAdapter,
  createSelector,
  PayloadAction,
} from "@reduxjs/toolkit";
import { jds } from "@/generated";

/**
 * 1. ADAPTER CONFIGURATION
 * Requirement 7: Normalized State Structure
 * Automatically handles 'id' and provides optimized CRUD operations.
 */
const jdsAdapter = createEntityAdapter<jds>({
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

/**
 * 2. STATE INTERFACE
 * Expanded to track all filters and sorting states for 2,000+ JDs.
 */
interface JdState {
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
}

/**
 * 3. THE SLICE
 */
const jdsSlice = createSlice({
  name: "jds",
  initialState: jdsAdapter.getInitialState<JdState>({
    selectedJdId: null,
    searchQuery: "",
    loading: false,
    filters: {
      minExp: 0,
      maxExp: 20,
      selectedSkills: [],
      status: "all",
    },
    sortBy: "relevance",
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
    setExpRange: (
      state,
      action: PayloadAction<{ min?: number; max?: number }>,
    ) => {
      if (action.payload.min !== undefined)
        state.filters.minExp = action.payload.min;
      if (action.payload.max !== undefined)
        state.filters.maxExp = action.payload.max;
    },
    toggleSkillFilter: (state, action: PayloadAction<string>) => {
      const skill = action.payload;
      const index = state.filters.selectedSkills.indexOf(skill);
      if (index > -1) {
        state.filters.selectedSkills.splice(index, 1);
      } else {
        state.filters.selectedSkills.push(skill);
      }
    },
    setSortBy: (state, action: PayloadAction<JdState["sortBy"]>) => {
      state.sortBy = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setJds,
  selectJd,
  setJdSearchQuery,
  setExpRange,
  toggleSkillFilter,
  setSortBy,
  setLoading,
} = jdsSlice.actions;

export default jdsSlice.reducer;

/**
 * 4. SELECTORS (Feature State Pattern)
 * Using a local type to prevent circular dependencies with RootState.
 */
type JdsFeatureState = {
  jds: ReturnType<typeof jdsSlice.reducer>;
};

export const jdsSelectors = jdsAdapter.getSelectors(
  (state: JdsFeatureState) => state.jds,
);

export const {
  selectAll: selectAllJDs,
  selectById: selectJdById,
  selectEntities: selectJdEntities,
} = jdsSelectors;

/**
 * 5. ADVANCED FILTER SELECTOR
 * Requirement 5.1 & 6: Memoized filtering/sorting logic.
 */
export const selectFilteredJDs = createSelector(
  [
    (state: JdsFeatureState) => selectAllJDs(state),
    (state: JdsFeatureState) => state.jds.searchQuery,
    (state: JdsFeatureState) => state.jds.filters,
    (state: JdsFeatureState) => state.jds.sortBy,
  ],
  (allJds, query, filters, sortBy) => {
    const search = query.toLowerCase().trim();

    // --- STEP 1: FILTERING ---
    const filteredResults = allJds.filter((jd) => {
      // Search Logic (Title or Skills)
      const matchesSearch =
        !search ||
        jd.title.toLowerCase().includes(search) ||
        jd.skills.some((s) => s.toLowerCase().includes(search));

      // Experience Logic
      const matchesExp =
        jd.min_exp >= filters.minExp && jd.min_exp <= filters.maxExp;

      // Multi-select Skill Logic (AND intersection)
      const matchesSkills =
        filters.selectedSkills.length === 0 ||
        filters.selectedSkills.every((s) => jd.skills.includes(s));

      return matchesSearch && matchesExp && matchesSkills;
    });

    // --- STEP 2: SORTING ---
    return [...filteredResults].sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }

      if (sortBy === "relevance") {
        // Priority 1: Direct Search Matches in Title
        if (search) {
          const aBoost = a.title.toLowerCase().includes(search) ? 0 : 1;
          const bBoost = b.title.toLowerCase().includes(search) ? 0 : 1;
          if (aBoost !== bBoost) return aBoost - bBoost;
        }

        // Priority 2: Skill richness (Jobs with more skills listed are more complex)
        if (b.skills.length !== a.skills.length) {
          return b.skills.length - a.skills.length;
        }

        // Priority 3: Seniority (Experience fallback)
        return b.min_exp - a.min_exp;
      }

      return 0;
    });
  },
);

/**
 * Selector for currently active job detail view
 */
export const selectSelectedJd = (state: JdsFeatureState) => {
  const { selectedJdId, entities } = state.jds;
  return selectedJdId ? entities[selectedJdId] : null;
};

import {
  createSlice,
  createEntityAdapter,
  createSelector,
  PayloadAction,
} from "@reduxjs/toolkit";

/**
 * 1. MANUAL INTERFACE
 * We bypass the strict generated type to force our clean arrays to pass through
 */
export interface Jd {
  id: string;
  title: string;
  skills: string[];
  min_exp: number;
}

/**
 * 2. ADAPTER CONFIGURATION
 * Requirement 7: Normalized State Structure
 */
const jdsAdapter = createEntityAdapter<Jd>({
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

/**
 * 3. STATE INTERFACE
 */
export interface JdState {
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
 * 4. THE SLICE
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
    setJds: (state, action: PayloadAction<Jd[]>) => {
      jdsAdapter.setAll(state, action.payload);
    },
    // setJds is the function that takes the final JD array from DataHydrator and saves it inside Redux jds state using the entity adapter.
    selectJd: (state, action: PayloadAction<string | null>) => {
      state.selectedJdId = action.payload;
    },
    setJdSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    // It updates the searchQuery value inside state.jds.
    // setJdSearchQuery stores the current search text in Redux so the selector can filter the JD list.
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
    // toggleSkillFilter stores selected skills
// selectFilteredJDs computes the visible list
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
 * 5. SELECTORS (Feature State Pattern)
 */
export type JdsFeatureState = {
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
 * 6. ADVANCED FILTER SELECTOR
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

    const filteredResults = allJds.filter((jd) => {
      const matchesSearch =
        !search ||
        jd.title.toLowerCase().includes(search) ||
        // Defensively check skills array to prevent filter crashes
        (jd.skills && jd.skills.some((s) => s.toLowerCase().includes(search)));

      const matchesExp =
        jd.min_exp >= filters.minExp && jd.min_exp <= filters.maxExp;

      const matchesSkills =
        filters.selectedSkills.length === 0 ||
        filters.selectedSkills.every((s) => jd.skills && jd.skills.includes(s));

      return matchesSearch && matchesExp && matchesSkills;
    });

    return [...filteredResults].sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "relevance") {
        if (search) {
          const aBoost = a.title.toLowerCase().includes(search) ? 0 : 1;
          const bBoost = b.title.toLowerCase().includes(search) ? 0 : 1;
          if (aBoost !== bBoost) return aBoost - bBoost;
        }
        if (b.skills && a.skills && b.skills.length !== a.skills.length)
          return b.skills.length - a.skills.length;
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

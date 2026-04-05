import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { selectJdEntities, selectSelectedJd } from "./jdsSlice";
import {
  selectAllCandidates,
  selectSelectedCandidate,
  selectSelectedJdIdsForCandidate,
  // We rename it here to avoid the naming conflict
  selectMatchedCandidates as selectMatchedCandidatesEngine,
} from "./candidatesSlice";

/**
 * 2. SELECTOR: selectMatchedCandidates
 * This is now the ONLY declaration of this name in this file.
 */
export const selectMatchedCandidates = selectMatchedCandidatesEngine;

/**
 * 3. SELECTOR: selectSelectedCandidateWithScore
 */
export const selectSelectedCandidateWithScore = createSelector(
  [
    selectMatchedCandidates,
    (state: RootState) => state.candidates.selectedCandidateId,
  ],
  (matchedList, selectedId) => {
    if (!selectedId) return null;
    return matchedList.find((c) => c.id === selectedId) || null;
  },
);

/**
 * 4. SELECTOR: selectCandidateHistory
 */
/**
 * 4. SELECTOR: selectCandidateHistory
 */
export const selectCandidateHistory = createSelector(
  [selectJdEntities, selectSelectedCandidate, selectSelectedJdIdsForCandidate],
  (jdEntities, candidate, selectedJdIdsForCandidate) => {
    if (!candidate || !selectedJdIdsForCandidate?.length) return [];

    return selectedJdIdsForCandidate
      .map((jdId) => jdEntities[jdId])
      .filter(Boolean);
  },
);

/**
 * 5. SELECTOR: selectFilteredCandidates
 */
export const selectFilteredCandidates = createSelector(
  [selectMatchedCandidates, (state: RootState) => state.jds.filters],
  (matchedCandidates, filters) => {
    const { minExp, selectedSkills } = filters;

    return matchedCandidates.filter((c) => {
      const expMatch = c.total_exp >= minExp;
      const skillMatch =
        selectedSkills.length === 0 ||
        selectedSkills.every((s: string) =>
          c.skills.some((cs: string) => cs.toLowerCase() === s.toLowerCase()),
        );

      return expMatch && skillMatch;
    });
  },
);

/**
 * 6. RE-EXPORTS
 */
export {
  selectJdEntities,
  selectSelectedJd,
  selectAllCandidates,
  selectSelectedCandidate,
};

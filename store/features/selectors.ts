import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { selectAllJDs, selectSelectedJd } from "./jdsSlice";
import {
  selectAllCandidates,
  selectSelectedCandidate,
  // We rename it here to avoid the naming conflict
  selectMatchedCandidates as selectMatchedCandidatesEngine,
} from "./candidatesSlice";

/**
 * 1. REQUIREMENT 5.3: SYSTEM-LEVEL INTERFACE
 */
interface CandidateWithHistory {
  id: string;
  skills: string[];
  appliedJdIds?: string[];
  name: string;
  total_exp: number;
}

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
export const selectCandidateHistory = createSelector(
  [selectAllJDs, selectSelectedCandidate],
  (allJds, candidate) => {
    if (!candidate) return [];
    const c = candidate as unknown as CandidateWithHistory;

    if (c.appliedJdIds && c.appliedJdIds.length > 0) {
      return allJds.filter((jd) => c.appliedJdIds?.includes(jd.id));
    }

    return allJds
      .filter((jd) => c.skills.some((skill) => jd.skills.includes(skill)))
      .slice(0, 3);
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
  selectAllJDs,
  selectSelectedJd,
  selectAllCandidates,
  selectSelectedCandidate,
};

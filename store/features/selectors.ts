import { createSelector } from "@reduxjs/toolkit";
import { selectAllJDs, selectSelectedJd } from "./jdsSlice";
import {
  selectAllCandidates,
  selectSelectedCandidate,
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
 * Exporting the engine so the Talent Pool can display the 60% scores.
 */
export const selectMatchedCandidates = selectMatchedCandidatesEngine;

/**
 * 3. SELECTOR: selectSelectedCandidateWithScore
 * FIX: This is the missing member!
 * It finds the selected candidate inside the CALCULATED list so the
 * Detail Panel sees the 60% instead of 0%.
 */
export const selectSelectedCandidateWithScore = createSelector(
  [selectMatchedCandidates, (state) => state.candidates.selectedCandidateId],
  (matchedList, selectedId) => {
    if (!selectedId) return null;
    return matchedList.find((c) => c.id === selectedId) || null;
  },
);

/**
 * 4. SELECTOR: selectCandidateHistory
 * Fulfills "Clicking candidate shows applied JDs" (Bidirectional Mapping)
 */
export const selectCandidateHistory = createSelector(
  [selectAllJDs, selectSelectedCandidate],
  (allJds, candidate) => {
    if (!candidate) return [];

    const c = candidate as unknown as CandidateWithHistory;

    // Direct ID Match
    if (c.appliedJdIds && c.appliedJdIds.length > 0) {
      return allJds.filter((jd) => c.appliedJdIds?.includes(jd.id));
    }

    // Fallback: Skill-based Relationship Mapping
    return allJds
      .filter((jd) => c.skills.some((skill) => jd.skills.includes(skill)))
      .slice(0, 3);
  },
);

/**
 * 5. RE-EXPORTS
 */
export {
  selectAllJDs,
  selectSelectedJd,
  selectAllCandidates,
  selectSelectedCandidate,
};

import { createSelector } from "@reduxjs/toolkit";
import { selectAllJDs, selectSelectedJd } from "./jdsSlice";
import {
  selectAllCandidates,
  selectSelectedCandidate,
  selectMatchedCandidates as selectMatchedCandidatesEngine, // Rename the import
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
 * 2. SELECTOR: selectCandidateHistory
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
 * 3. EXPORT THE MATCH ENGINE
 * We export the engine from candidatesSlice under the name 'selectMatchedCandidates'
 * so that CandidatePanel.tsx can find it.
 */
export const selectMatchedCandidates = selectMatchedCandidatesEngine;

/**
 * 4. RE-EXPORTS
 * Requirement 5.4: Ensure base selectors are available for the Detail Panel
 */
export {
  selectAllJDs,
  selectSelectedJd,
  selectAllCandidates,
  selectSelectedCandidate,
};

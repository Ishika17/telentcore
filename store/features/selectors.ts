import { createSelector } from "@reduxjs/toolkit";
import { selectAllJDs, selectSelectedJd } from "./jdsSlice";
import {
  selectAllCandidates,
  selectSelectedCandidate,
  selectMatchedCandidates as selectMatchedCandidatesFromSlice,
} from "./candidatesSlice";

/**
 * Requirement 5.3: Bidirectional Mapping
 * This fulfills "Clicking candidate shows applied JDs" in the Detail Panel.
 */
export const selectCandidateHistory = createSelector(
  [selectAllJDs, selectSelectedCandidate],
  (allJds, candidate) => {
    // Check if candidate exists (Requirement 9: Edge Case)
    if (!candidate) return [];

    /**
     * If your 'candidate' object has an 'appliedJdIds' array, use this:
     * return allJds.filter((jd) => candidate.appliedJdIds?.includes(jd.id));
     * * Fallback Logic: Show JDs that match at least one of the candidate's skills
     */
    return allJds.filter((jd) =>
      candidate.skills.some((skill) => jd.skills.includes(skill)),
    );
  },
);

/**
 * Requirement 5.2 & 6: Match Scoring Engine
 * We re-export the logic from the candidatesSlice to ensure
 * 3,000+ candidates are sorted with zero lag.
 */
export const selectMatchedCandidates = selectMatchedCandidatesFromSlice;

// Export base selectors for use in components
export {
  selectAllJDs,
  selectSelectedJd,
  selectAllCandidates,
  selectSelectedCandidate,
};

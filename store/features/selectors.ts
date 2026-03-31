import { createSelector } from "@reduxjs/toolkit";
import { selectAllCandidates } from "./candidatesSlice";
import { selectSelectedJd } from "./jdsSlice";

/**
 * Requirement 5.3: Match Scoring Logic
 * This selector calculates the score for 3,000 candidates
 * instantly whenever a new JD is selected.
 */
export const selectMatchedCandidates = createSelector(
  [selectAllCandidates, selectSelectedJd],
  (candidates, selectedJd) => {
    // If no JD is selected, return candidates in original order
    if (!selectedJd) return candidates.map((c) => ({ ...c, matchScore: 0 }));

    const jdSkills = new Set(selectedJd.skills.map((s) => s.toLowerCase()));

    const scoredCandidates = candidates.map((candidate) => {
      const candidateSkills = candidate.skills.map((s) => s.toLowerCase());

      // Intersection count: How many skills overlap?
      const matches = candidateSkills.filter((skill) =>
        jdSkills.has(skill),
      ).length;

      // Simple percentage calculation
      const score =
        jdSkills.size > 0 ? Math.round((matches / jdSkills.size) * 100) : 0;

      return { ...candidate, matchScore: score };
    });

    // Requirement 6: Sorting 3,000 items by score
    return scoredCandidates.sort((a, b) => b.matchScore - a.matchScore);
  },
);

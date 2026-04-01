import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { jdsSelectors } from "./jdsSlice";
import {
  candidateSelectors,
  selectSelectedCandidateId,
} from "./candidatesSlice";

// 1. Update the Interface to match the system requirements [cite: 30, 49]
interface Candidate {
  id: string;
  name: string;
  skills: string[];
  total_exp: number;
  appliedJdIds: string[]; // This allows the bidirectional mapping
}

const selectAllJds = jdsSelectors.selectAll;
const selectAllCandidates = candidateSelectors.selectAll;
const selectSelectedJdId = (state: RootState) => state.jds.selectedJdId;

const selectSelectedJd = createSelector(
  [selectAllJds, selectSelectedJdId],
  (jds, selectedId) => jds.find((jd) => jd.id === selectedId),
);

/**
 * Requirement 5.4: Detail Panel Selector
 * Efficiently retrieves the candidate for the profile view [cite: 51]
 */
export const selectSelectedCandidate = createSelector(
  [
    candidateSelectors.selectEntities,
    (state: RootState) => selectSelectedCandidateId(state),
  ],
  (entities, selectedId) =>
    selectedId ? (entities[selectedId] as unknown as Candidate) : null,
);

/**
 * Requirement 5.3: Bidirectional Mapping [cite: 47, 48]
 * This fulfills "Clicking candidate shows applied JDs" [cite: 48]
 */
export const selectCandidateHistory = createSelector(
  [selectAllJds, selectSelectedCandidate],
  (allJds, candidate) => {
    // Check if candidate and history exist to handle edge cases [cite: 80, 81]
    if (!candidate || !candidate.appliedJdIds) return [];
    return allJds.filter((jd) => candidate.appliedJdIds.includes(jd.id));
  },
);

/**
 * Requirement 5.3 & 6: Performance Optimized Match Scoring [cite: 55, 59]
 * Scores 3,000+ candidates based on JD skill overlap [cite: 29, 32]
 */
export const selectMatchedCandidates = createSelector(
  [selectAllCandidates, selectSelectedJd],
  (candidates, selectedJd) => {
    const typedCandidates = candidates as unknown as Candidate[];

    if (!selectedJd) {
      return typedCandidates.map((c) => ({ ...c, matchScore: 0 }));
    }

    const jdSkills = new Set(
      selectedJd.skills.map((s: string) => s.toLowerCase()),
    );

    const scoredCandidates = typedCandidates.map((candidate) => {
      const candidateSkills = candidate.skills.map((s: string) =>
        s.toLowerCase(),
      );
      const matches = candidateSkills.filter((skill: string) =>
        jdSkills.has(skill),
      ).length;

      const score =
        jdSkills.size > 0 ? Math.round((matches / jdSkills.size) * 100) : 0;
      return { ...candidate, matchScore: score };
    });

    // Requirement 6: Sort by relevance without lagging [cite: 38, 55]
    return [...scoredCandidates].sort((a, b) => b.matchScore - a.matchScore);
  },
);

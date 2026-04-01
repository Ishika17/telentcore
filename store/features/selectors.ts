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

    // PASTE THE FIXED CODE HERE:
    return allJds
      .filter((jd) => {
        // 1. Force candidate skills into an array to stop the crash
        const rawSkills = c.skills as unknown as string | string[] | null;
        const candidateSkillsArray: string[] =
          typeof rawSkills === "string"
            ? rawSkills
                .replace(/[{}]/g, "")
                .split(",")
                .map((s: string) => s.trim())
            : (rawSkills as string[]) || [];

        // 2. Do the same for JD skills just in case Supabase passes strings there too!
        const rawJdSkills = jd.skills as unknown as string | string[] | null;
        const jdSkillsArray: string[] =
          typeof rawJdSkills === "string"
            ? rawJdSkills
                .replace(/[{}]/g, "")
                .split(",")
                .map((s: string) => s.trim())
            : (rawJdSkills as string[]) || [];

        // 3. Now run the safe arrays through .some()
        return candidateSkillsArray.some((skill) =>
          jdSkillsArray.includes(skill),
        );
      })
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

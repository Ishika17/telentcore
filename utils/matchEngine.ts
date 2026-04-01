// src/utils/matchEngine.ts
export const calculateMatchScore = (
  candidateSkills: string[],
  jdSkills: Set<string>,
  totalExp: number,
  minExp: number,
) => {
  const matchingSkills = candidateSkills.filter((s) =>
    jdSkills.has(s.toLowerCase()),
  );
  const skillRatio =
    jdSkills.size > 0 ? matchingSkills.length / jdSkills.size : 0;

  let score = skillRatio * 80;
  if (totalExp >= minExp) score += 20;
  else if (totalExp >= minExp - 2) score += 10;

  return {
    score: Math.round(score),
    matchingSkills,
  };
};

// components/DetailPanel/SummarySection.tsx
import { MatchedCandidate } from "@/store/features/candidatesSlice";

interface SummaryProps {
  candidate: MatchedCandidate;
}

export const SummarySection = ({ candidate }: SummaryProps) => {
  // 1. Safely parse skills to satisfy ESLint and prevent runtime crashes
  const rawSkills = candidate.skills as unknown as string | string[] | null;

  let topSkillsString = "relevant skills";

  if (rawSkills) {
    const skillsArray: string[] =
      typeof rawSkills === "string"
        ? rawSkills
            .replace(/[{}]/g, "")
            .split(",")
            .map((s: string) => s.trim())
        : (rawSkills as string[]);

    if (skillsArray.length > 0) {
      topSkillsString = skillsArray.slice(0, 3).join(", ");
    }
  }

  // TypeScript now recognizes 'description' because it's in MatchedCandidate
  const displayDescription =
    candidate.description ||
    `Strategic professional with ${candidate.total_exp} years of specialized experience. Expert in ${topSkillsString}.`;

  return (
    <section className="mt-4">
      <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
        Professional Summary
      </h3>
      <div className="p-4 bg-slate-50 rounded-xl text-sm text-slate-600 italic">
        &quot;{displayDescription}&quot;
      </div>
    </section>
  );
};

"use client";

import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import { useIsClient } from "@/app/hooks/useIsClient";
import {
  selectSelectedCandidateWithScore,
  selectSelectedJd,
  selectCandidateHistory,
} from "@/store/features/selectors";
import { MatchedCandidate } from "@/store/features/candidatesSlice";

// 1. Fixed Imports (Ensure spelling matches your filenames)
import { IdentityHeader } from "./IdentityHeader";
import { SkillCloud } from "./SkillCloud";
import { SummarySection } from "./SummarySection"; // Fixed typo here
import { ApplicationHistory } from "./ApplicationHistory";

// 2. Added EmptyState Component
const EmptyState = () => (
  <div className="h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-8 text-center uppercase tracking-tighter">
    <p className="text-lg font-medium text-slate-600">No Candidate Selected</p>
    <p className="text-xs lowercase tracking-normal">
      Select a profile to view mapping
    </p>
  </div>
);

export default function DetailPanel() {
  const isClient = useIsClient();
  const candidate = useAppSelector(
    selectSelectedCandidateWithScore,
  ) as MatchedCandidate | null;
  const selectedJd = useAppSelector(selectSelectedJd);
  const history = useAppSelector(selectCandidateHistory);

  const jdSkills = useMemo(
    () => new Set(selectedJd?.skills?.map((s) => s.toLowerCase()) || []),
    [selectedJd],
  );

  if (!isClient) return <div className="h-full bg-white" />;
  if (!candidate) return <EmptyState />;

  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto custom-scrollbar">
      {/* Now matches the { candidate } prop pattern */}
      <IdentityHeader candidate={candidate} />

      <div className="p-6 space-y-8">
        <SummarySection candidate={candidate} />
        <SkillCloud skills={candidate.skills} jdSkills={jdSkills} />
        <ApplicationHistory history={history} />
      </div>

      <div className="mt-auto p-6 border-t bg-slate-50">
        <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-all active:scale-95">
          Initiate Outreach
        </button>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useIsClient } from "@/app/hooks/useIsClient";
// Import your action to fix the unused dispatch
import { updateCandidateStatus } from "@/store/features/candidatesSlice";
import {
  selectSelectedCandidateWithScore,
  selectSelectedJd,
  selectCandidateHistory,
} from "@/store/features/selectors";
import { MatchedCandidate } from "@/store/features/candidatesSlice";

// Components
import { IdentityHeader } from "./IdentityHeader";
import { SkillCloud } from "./SkillCloud";
import { SummarySection } from "./SummarySection";
import { ApplicationHistory } from "./ApplicationHistory";

export default function DetailPanel() {
  const isClient = useIsClient();
  const dispatch = useAppDispatch(); // Now we will use this

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const candidate = useAppSelector(
    selectSelectedCandidateWithScore,
  ) as MatchedCandidate | null;
  const selectedJd = useAppSelector(selectSelectedJd);
  const history = useAppSelector(selectCandidateHistory);

  const jdSkills = useMemo(
    () => new Set(selectedJd?.skills?.map((s) => s.toLowerCase()) || []),
    [selectedJd],
  );

  const handleOutreach = async () => {
    if (!candidate || isSuccess) return;

    setIsSending(true);

    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Using dispatch here to update the store
    dispatch(updateCandidateStatus({ id: candidate.id, status: "CONTACTED" }));

    setIsSending(false);
    setIsSuccess(true);

    // 👇 ADD THIS: Reset the success state after 2.5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 2500);
  };

  if (!isClient) return <div className="h-full bg-white" />;
  if (!candidate)
    return (
      <div className="h-full flex flex-col items-center justify-center bg-slate-50/50 text-center p-6">
        <div className="max-w-sm flex flex-col items-center space-y-4">
          {/* Subtle Icon */}
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-slate-900 font-semibold text-base mb-1">
              No Profile Selected
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Choose a candidate from the talent pool to view their full
              profile, skill match, and initiate outreach.
            </p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="h-full flex flex-col bg-white overflow-hidden">
      <IdentityHeader candidate={candidate} />

      <div className="flex-1 overflow-y-auto p-6 space-y-10">
        <SummarySection candidate={candidate} />
        <SkillCloud skills={candidate.skills} jdSkills={jdSkills} />
        <ApplicationHistory history={history} />
      </div>

      <footer className="p-6 border-t bg-white">
        <button
          onClick={handleOutreach}
          disabled={isSending || isSuccess}
          className={`w-full py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all
            ${isSuccess ? "bg-green-600 text-white" : "bg-slate-900 text-white hover:bg-black"}
          `}
        >
          {isSending
            ? "Processing..."
            : isSuccess
              ? "✓ Outreach Initiated"
              : "Initiate Outreach"}
        </button>
      </footer>
    </div>
  );
}

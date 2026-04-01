"use client";

import { useAppSelector } from "@/store/hooks";
import { useIsClient } from "@/app/hooks/useIsClient";
import {
  selectMatchedCandidates,
  selectCandidateHistory,
} from "@/store/features/selectors";

// 1. Requirement 7 & 13: Strict Typing for System-Level Predictability
interface Candidate {
  id: string;
  name: string;
  matchScore: number;
  total_exp: number;
  skills: string[];
  appliedJdIds: string[];
  email?: string;
  role?: string;
  description?: string;
}

export default function DetailPanel() {
  const isClient = useIsClient();

  // 2. Requirement 7.3: Optimized Selector Access
  const selectedId = useAppSelector(
    (state) => state.candidates.selectedCandidateId,
  );

  const candidates = useAppSelector(
    selectMatchedCandidates,
  ) as unknown as Candidate[];

  const applicationHistory = useAppSelector(selectCandidateHistory);

  // 3. Data Derivation
  const candidate = candidates.find((c) => c.id === selectedId);

  // Requirement 5.4 & 9: Logic to handle missing descriptions with a mock summary
  const displayDescription =
    candidate?.description ||
    (candidate
      ? `Strategic professional with ${candidate.total_exp} years of specialized experience. Expert in ${candidate.skills.slice(0, 3).join(", ")} and high-performance system architecture. Proven track record of delivering scalable solutions in complex environments.`
      : "");

  /**
   * STAGE 1: THE HYDRATION FIREWALL
   * To prevent "Hydration failed" errors, the Server and the first Client render
   * MUST be identical. We return a simple white background shell first.
   */
  if (!isClient) {
    return <div className="h-full bg-white" />;
  }

  /**
   * STAGE 2: EMPTY STATE (Client-Only)
   * Requirement 9: Edge Case Handling
   */
  if (!selectedId || !candidate) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-8 text-center">
        <div className="mb-4 opacity-20">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <p className="text-lg font-medium text-slate-600">
          No Candidate Selected
        </p>
        <p className="text-sm">
          Select a profile from the talent pool to view mapping and history.
        </p>
      </div>
    );
  }

  /**
   * STAGE 3: DATA VIEW (Client-Only)
   * Requirement 4.1 & 5.4: Full Detail Panel Implementation
   */
  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto custom-scrollbar">
      {/* Sticky Header: Candidate Identity */}
      <div className="p-6 border-b sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {candidate.name}
            </h2>
            <p className="text-blue-600 font-semibold text-sm">
              {candidate.role || "Senior Candidate"} •{" "}
              {candidate.email || "Contact available upon request"}
            </p>
          </div>

          {candidate.matchScore > 0 && (
            <div className="text-right">
              <div
                className={`text-3xl font-black ${candidate.matchScore > 75 ? "text-green-600" : "text-amber-500"}`}
              >
                {candidate.matchScore}%
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                Match Score
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 mt-4">
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-bold border border-slate-200">
            {candidate.total_exp} Years Exp
          </span>
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-xs font-bold border border-blue-100 uppercase">
            Verified Profile
          </span>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Requirement 5.4: Resume Viewer (Mock Structured) */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Professional Summary
          </h3>
          <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl text-slate-700 text-sm leading-relaxed shadow-inner">
            {displayDescription}
          </div>
        </section>

        {/* Technical Skills Tag Cloud */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Technical Expertise
          </h3>
          <div className="flex flex-wrap gap-2">
            {candidate.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-all cursor-default shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Requirement 5.3 & 5.4: Bidirectional Mapping (History) */}
        <section className="pb-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Application History
            </h3>
            <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full font-bold text-slate-500">
              {applicationHistory.length} Total
            </span>
          </div>

          <div className="space-y-3">
            {applicationHistory.length > 0 ? (
              applicationHistory.map((jd) => (
                <div
                  key={jd.id}
                  className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex justify-between items-center hover:border-blue-200 transition-all"
                >
                  <div>
                    <p className="text-sm font-bold text-slate-700">
                      {jd.title}
                    </p>
                    {/* Added the dynamic-looking mock date from your snippet */}
                    <p className="text-[10px] text-slate-400 uppercase font-bold mt-0.5">
                      Applied 2 days ago
                    </p>
                  </div>
                  <span className="text-[10px] font-black px-2 py-1 bg-green-100 text-green-700 rounded-md">
                    ACTIVE
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center p-8 border-2 border-dashed border-slate-100 rounded-2xl">
                <p className="text-xs text-slate-400 italic">
                  No previous applications found.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Action Footer */}
      <div className="mt-auto p-6 border-t bg-slate-50">
        <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-all shadow-xl active:scale-[0.98]">
          Initiate Outreach
        </button>
      </div>
    </div>
  );
}

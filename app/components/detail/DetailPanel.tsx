"use client";

import React from "react";
import { useAppSelector } from "@/store/hooks";
import { selectMatchedCandidates } from "@/store/features/selectors";

// 1. Define the Candidate interface for strict typing
interface Candidate {
  id: string;
  name: string;
  email: string;
  matchScore: number;
  total_exp: number;
  skills: string[];
  role?: string;
}

export default function DetailPanel() {
  // 2. Get the selected ID from the candidates slice
  const selectedId = useAppSelector(
    (state) => state.candidates.selectedCandidateId,
  );

  // 3. Get the candidates and cast them to the Candidate interface
  // This ensures 'candidates' is not an 'any' array
  const candidates = useAppSelector(selectMatchedCandidates) as Candidate[];

  // 4. Explicitly type the parameter 'c' as 'Candidate' to fix the error
  const candidate = candidates.find((c: Candidate) => c.id === selectedId);

  // 5. Empty State: If no candidate is selected or found
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
              d="16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <p className="text-lg font-medium">No Candidate Selected</p>
        <p className="text-sm">
          Select a profile from the talent pool to view full details and match
          analysis.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto">
      {/* Header Section */}
      <div className="p-6 border-b shrink-0 bg-white sticky top-0 z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {candidate.name}
            </h2>
            <p className="text-blue-600 font-medium">{candidate.email}</p>
          </div>
          {candidate.matchScore > 0 && (
            <div className="text-right">
              <div
                className={`text-3xl font-black ${
                  candidate.matchScore > 70
                    ? "text-green-600"
                    : "text-orange-500"
                }`}
              >
                {candidate.matchScore}%
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                Match Score
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <div className="bg-slate-100 px-3 py-1 rounded text-sm font-semibold text-slate-700">
            {candidate.total_exp} Years Exp
          </div>
          <div className="bg-blue-50 px-3 py-1 rounded text-sm font-semibold text-blue-700 uppercase">
            {candidate.role || "Candidate"}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-8">
        {/* Technical Skills */}
        <section>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {candidate.skills.map((skill: string) => (
              <span
                key={skill}
                className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded-md text-sm hover:bg-white hover:border-blue-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* AI-Generated Professional Summary */}
        <section>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
            Professional Summary
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Experienced {candidate.role || "professional"} with a demonstrated
            history of working with {candidate.skills.slice(0, 3).join(", ")}.
            Proven track record over {candidate.total_exp} years of delivering
            high-quality technical solutions and collaborating with
            cross-functional teams.
          </p>
        </section>

        {/* Action Button */}
        <section className="pt-6 border-t">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-[0.98]">
            Schedule Interview
          </button>
        </section>
      </div>
    </div>
  );
}

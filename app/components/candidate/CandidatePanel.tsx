"use client";

import { Virtuoso } from "react-virtuoso";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  selectMatchedCandidates,
  selectCandidate,
} from "@/store/features/candidatesSlice";
import { useIsClient } from "@/app/hooks/useIsClient";

const CandidatePanel = () => {
  const isClient = useIsClient();
  const dispatch = useAppDispatch();

  // FIX 1: Moved hook inside the component where it belongs!
  const selectedSkills = useAppSelector(
    (state) => state.jds.filters.selectedSkills,
  );

  // Requirement 5.2: The "Intelligent Mapping" list
  const candidates = useAppSelector(selectMatchedCandidates);
  const selectedId = useAppSelector(
    (state) => state.candidates.selectedCandidateId,
  );

  if (!isClient) return <div className="h-full bg-slate-50 animate-pulse" />;

  return (
    <div className="flex flex-col h-full bg-slate-50 border-r overflow-hidden">
      {/* HEADER SECTION */}
      <div className="p-4 bg-white border-b shrink-0 flex justify-between items-center shadow-sm z-10">
        <div>
          <h2 className="font-black text-[11px] uppercase tracking-[0.2em] text-slate-400">
            Talent Pool
          </h2>
          <p className="text-[10px] font-bold text-blue-500 uppercase tracking-tight">
            Ranked by Match Score
          </p>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-black text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
            {candidates.length.toLocaleString()} PROFILES
          </span>
        </div>
      </div>

      {/* VIRTUALIZED LIST SECTION (Requirement 6) */}
      <div className="flex-1 min-h-0">
        <Virtuoso
          style={{ height: "100%" }}
          data={candidates}
          // Requirement 6: Smooth scrolling for 3,000+ items
          increaseViewportBy={200}
          itemContent={(index, candidate) => {
            const isSelected = selectedId === candidate.id;

            return (
              <div className="px-3 pt-2 pb-1">
                <div
                  onClick={() => dispatch(selectCandidate(candidate.id))}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 group ${
                    isSelected
                      ? "bg-white border-blue-500 shadow-lg ring-1 ring-blue-500"
                      : "bg-white border-slate-100 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-0.5">
                      <h3
                        className={`font-bold text-sm leading-none ${isSelected ? "text-blue-700" : "text-slate-800"}`}
                      >
                        {candidate.name}
                      </h3>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">
                        {candidate.total_exp} Years Experience
                      </p>
                    </div>

                    {/* Requirement 5.2: Match Score Badge */}
                    <div className="flex flex-col items-end">
                      <div
                        className={`text-[11px] font-black px-2 py-1 rounded-lg ${
                          candidate.matchScore > 80
                            ? "bg-green-500 text-white"
                            : candidate.matchScore > 50
                              ? "bg-blue-500 text-white"
                              : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {candidate.matchScore}%
                      </div>
                    </div>
                  </div>

                  {/* Requirement 5.1 & 5.2: Skill Highlighting */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {(() => {
                      const rawSkills = candidate.skills as unknown as
                        | string
                        | string[]
                        | null;

                      if (!rawSkills) return null;

                      const skillsArray: string[] =
                        typeof rawSkills === "string"
                          ? rawSkills
                              .replace(/[{}]/g, "")
                              .split(",")
                              .map((s: string) => s.trim())
                          : rawSkills;

                      return skillsArray.slice(0, 4).map((skill: string) => {
                        const isMatch =
                          selectedSkills.length > 0
                            ? selectedSkills
                                .map((s) => s.toLowerCase())
                                .includes(skill.toLowerCase())
                            : candidate.matchingSkills?.includes(skill);
                        return (
                          <span
                            key={skill}
                            className={`text-[9px] px-2 py-0.5 rounded-md font-black uppercase tracking-tighter border transition-colors ${
                              isMatch
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "bg-slate-50 border-slate-200 text-slate-400"
                            }`}
                          >
                            {skill}
                          </span>
                        );
                      });
                    })()}
                  </div>
                </div>
              </div>
            );
          }}
          className="custom-scrollbar"
        />
      </div>
    </div>
  );
};

export default CandidatePanel;

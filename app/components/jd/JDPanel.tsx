"use client";

import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useIsClient } from "@/app/hooks/useIsClient";
import {
  selectFilteredJDs,
  selectJd,
  setJdSearchQuery,
  setExpRange,
  setSortBy,
  toggleSkillFilter,
} from "@/store/features/jdsSlice";
import { setCandidateSelectedJd } from "@/store/features/candidatesSlice";

const JDPanel = () => {
  const isClient = useIsClient();
  const dispatch = useAppDispatch();

  // Requirement 7: Accessing Normalized State
  const { filters, sortBy, selectedJdId } = useAppSelector(
    (state) => state.jds,
  );
  const selectedCandidateId = useAppSelector(
    (state) => state.candidates.selectedCandidateId,
  );
  const filteredJds = useAppSelector(selectFilteredJDs);
  // useAppSelector does two things:

// 
  // this is imp line beacuse it giv ethe extact condition of code whch liInstead it asks the selector:
// “Give me the final JD list that should be displayed.”
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Requirement 6: Performance Optimization (Debounce)
   * Prevents O(N) filtering on every single keystroke.
   */
//   Why this is done:
// If user types "react developer" letter by letter, without debounce Redux would update on every keystroke.

// With debounce:

// user types
// component waits a little
// only then updates Redux search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(setJdSearchQuery(searchTerm));
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, dispatch]);

  if (!isClient) return <div className="h-full bg-slate-50 animate-pulse" />;

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-hidden">
      {/* 1. HEADER SECTION: Search & Filters */}
      <div className="shrink-0 bg-white border-b shadow-sm z-10 p-4 space-y-4">
        <div>
          <h2 className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-3">
            Job Descriptions
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search 2,000+ jobs..."
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-3 top-3 text-slate-400 text-xs">
              🔍
            </span>
          </div>
        </div>

        {/* ACTIVE FILTERS CHIPS */}
        {filters.selectedSkills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-50 mt-2">
            {filters.selectedSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => dispatch(toggleSkillFilter(skill))}
                className="text-[9px] font-bold bg-blue-600 text-white px-2 py-1 rounded-md flex items-center gap-1 hover:bg-blue-700 transition-colors shadow-sm"
              >
                {skill} <span className="opacity-60">×</span>
              </button>
            ))}
          </div>
        )}

        {/* EXPERIENCE SLIDER & SORTING */}
        <div className="grid grid-cols-2 gap-4 items-end">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-slate-400">
              <label>Min Exp</label>
              <span className="text-blue-600 font-bold">{filters.minExp}y</span>
            </div>
            <input
              type="range"
              min="0"
              max="15"
              value={filters.minExp}
              onChange={(e) =>
                dispatch(setExpRange({ min: parseInt(e.target.value) }))
              }
              className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg self-center">
            {(["relevance", "title"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => dispatch(setSortBy(mode))}
                className={`flex-1 text-[8px] font-black px-2 py-1.5 rounded-md transition-all uppercase tracking-tighter ${
                  sortBy === mode
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500"
                }`}
              >
                {mode === "relevance" ? "Best Match" : "A-Z"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. LIST SECTION: Results */}
      <div className="flex-1 overflow-y-auto p-3 custom-scrollbar space-y-2">
        {filteredJds.length > 0 ? (
          filteredJds.map((jd) => {
            const isSelected = selectedJdId === jd.id;
            return (
              <div
                key={jd.id}
                onClick={() => {
                  dispatch(selectJd(jd.id));

                  if (selectedCandidateId) {
                    dispatch(
                      setCandidateSelectedJd({
                        candidateId: selectedCandidateId,
                        jdId: jd.id,
                      }),
                    );
                  }
                }}
                // by thsi id iyt caluculate teh canditae pabel with thsiid and details panel also select that id 
                // These were originally raw DB rows,
// then DataHydrator converted them,
// then Redux stored them,
// then selector returned them,
// then JDPanel displays them.
                className={`group p-4 rounded-xl cursor-pointer transition-all border ${
                  isSelected
                    ? "bg-white border-blue-500 shadow-md ring-1 ring-blue-500/10"
                    : "bg-white/40 border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-sm"
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3
                    className={`font-bold text-sm leading-tight ${isSelected ? "text-blue-700" : "text-slate-800"}`}
                  >
                    {jd.title}
                  </h3>
                  <span
                    className={`text-[9px] font-black px-1.5 py-0.5 rounded ${isSelected ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-400"}`}
                  >
                    {jd.min_exp}+Y
                  </span>
                </div>

                {/* Requirement 5.1: Multi-select Interaction */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {jd.skills.slice(0, 4).map((skill) => {
                    const isFiltered = filters.selectedSkills.includes(skill);
                    return (
                      <span
                        key={skill}
                        onClick={(e) => {
                          e.stopPropagation(); // CRITICAL: Stop parent click (JD selection)
                          dispatch(toggleSkillFilter(skill));
                        }}
                        className={`text-[8px] px-2 py-0.5 rounded-full font-bold transition-all border ${
                          isFiltered
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "bg-slate-50 border-slate-100 text-slate-400 hover:border-blue-400 hover:text-blue-600"
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                  {jd.skills.length > 4 && (
                    <span className="text-[8px] text-slate-300 font-bold self-center ml-1">
                      +{jd.skills.length - 4}
                    </span>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="py-20 text-center space-y-2">
            <p className="text-xl">🔎</p>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
              No jobs matching criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JDPanel;

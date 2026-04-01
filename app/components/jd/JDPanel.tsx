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
  toggleSkillFilter, // Import this
} from "@/store/features/jdsSlice";

const JDPanel = () => {
  const isClient = useIsClient();
  const dispatch = useAppDispatch();
  const { filters, sortBy, selectedJdId } = useAppSelector(
    (state) => state.jds,
  );
  const filteredJds = useAppSelector(selectFilteredJDs);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(setJdSearchQuery(searchTerm));
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, dispatch]);

  return (
    <div className="flex flex-col h-full bg-slate-50 border-r overflow-hidden">
      {/* HEADER SECTION */}
      <div className="shrink-0 bg-white border-b shadow-sm z-10">
        <div className="p-4 pb-2">
          <h2 className="font-black text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-4">
            Job Descriptions
          </h2>
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* ADVANCED FILTERS */}
        <div className="px-4 pb-4 space-y-4">
          {/* Active Skill Filters (Requirement 5.1) */}
          {filters.selectedSkills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 py-1">
              {filters.selectedSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => dispatch(toggleSkillFilter(skill))}
                  className="text-[9px] font-bold bg-blue-600 text-white px-2 py-1 rounded-md flex items-center gap-1 hover:bg-blue-700 transition-colors"
                >
                  {skill} <span>×</span>
                </button>
              ))}
            </div>
          )}

          {/* Experience Range Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <label>Min Experience</label>
              <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                {filters.minExp}+ Years
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="15"
              value={filters.minExp}
              onChange={(e) =>
                dispatch(setExpRange({ min: parseInt(e.target.value) }))
              }
              className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          {/* Sort Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => dispatch(setSortBy("relevance"))}
              className={`text-[9px] font-black px-3 py-1.5 rounded-md transition-all ${sortBy === "relevance" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}
            >
              RELEVANCE
            </button>
            <button
              onClick={() => dispatch(setSortBy("title"))}
              className={`text-[9px] font-black px-3 py-1.5 rounded-md transition-all ${sortBy === "title" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}
            >
              A-Z
            </button>
          </div>
        </div>
      </div>

      {/* LIST SECTION */}
      <div className="flex-1 overflow-y-auto p-3 custom-scrollbar space-y-2">
        {isClient &&
          filteredJds.map((jd) => {
            const isSelected = selectedJdId === jd.id;
            return (
              <div
                key={jd.id}
                onClick={() => dispatch(selectJd(jd.id))}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  isSelected
                    ? "bg-white border-blue-500 shadow-lg ring-1 ring-blue-500"
                    : "bg-transparent border-transparent hover:bg-white hover:border-slate-200"
                }`}
              >
                <h3
                  className={`font-bold text-sm mb-1 ${isSelected ? "text-blue-700" : "text-slate-800"}`}
                >
                  {jd.title}
                </h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">
                  Exp: {jd.min_exp} yrs
                </p>

                {/* Requirement 5.1: Multi-select Skills Tag Cloud */}
                <div className="flex flex-wrap gap-1.5">
                  {jd.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent selecting the JD when clicking a skill
                        dispatch(toggleSkillFilter(skill));
                      }}
                      className={`text-[9px] px-2 py-1 rounded font-bold transition-colors border ${
                        filters.selectedSkills.includes(skill)
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "bg-slate-50 border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default JDPanel;

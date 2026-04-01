"use client";

import React from "react";
import { Virtuoso } from "react-virtuoso";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useIsClient } from "@/app/hooks/useIsClient"; // 1. Import your new hook
import { selectCandidate } from "@/store/features/candidatesSlice";
import { selectMatchedCandidates } from "@/store/features/selectors";

interface Candidate {
  id: string;
  name: string;
  matchScore: number;
  total_exp: number;
  skills: string[];
}

const CandidatePanel = () => {
  const isClient = useIsClient(); // 2. Call the hook
  const dispatch = useAppDispatch();
  const scoredCandidates = useAppSelector<Candidate[]>(selectMatchedCandidates);
  const selectedId = useAppSelector(
    (state) => state.candidates.selectedCandidateId,
  );

  return (
    <div className="h-full flex flex-col border-r bg-white overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-white font-bold border-b flex justify-between items-center shrink-0">
        <span className="text-sm uppercase tracking-wider text-slate-500">
          Talent Pool
        </span>
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-[10px] font-bold">
          {scoredCandidates?.length || 0} Candidates
        </span>
      </div>

      {/* The List Container */}
      <div className="flex-1 min-h-0 bg-slate-50 custom-scrollbar">
        {/* 3. Wrap the Virtuoso list in the isClient check */}
        {isClient && scoredCandidates && scoredCandidates.length > 0 ? (
          <Virtuoso
            style={{ height: "100%" }}
            data={scoredCandidates}
            totalCount={scoredCandidates.length}
            itemContent={(index, person) => {
              const isSelected = selectedId === person.id;

              return (
                <div className="px-2 py-1">
                  <div
                    onClick={() => dispatch(selectCandidate(person.id))}
                    className={`flex flex-col p-4 rounded-lg cursor-pointer transition-all duration-200 border ${
                      isSelected
                        ? "bg-blue-50 border-blue-500 shadow-sm ring-1 ring-blue-500"
                        : "hover:bg-white hover:shadow-md border-transparent bg-transparent"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span
                        className={`font-bold text-sm ${isSelected ? "text-blue-700" : "text-slate-800"}`}
                      >
                        {person.name}
                      </span>
                      {person.matchScore > 0 && (
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 ${
                            person.matchScore > 70
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {person.matchScore}% Match
                        </span>
                      )}
                    </div>

                    <span
                      className={`text-xs mt-1 font-medium ${isSelected ? "text-blue-500" : "text-slate-500"}`}
                    >
                      {person.total_exp} Years Experience
                    </span>

                    <div className="flex gap-1 mt-3 overflow-hidden">
                      {person.skills?.slice(0, 3).map((skill: string) => (
                        <span
                          key={`${person.id}-${skill}`}
                          className={`text-[10px] px-2 py-0.5 rounded-md truncate border ${
                            isSelected
                              ? "bg-blue-100 border-blue-200 text-blue-600"
                              : "bg-slate-100 border-slate-200 text-slate-600"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }}
          />
        ) : /* 4. This shows while mounting OR if the list is empty */
        !isClient ? null : (
          <div className="p-8 text-center text-slate-400 text-sm">
            No candidates found.
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidatePanel;

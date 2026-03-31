"use client";
import React, { useState, useEffect } from "react";
import { FixedSizeList } from "react-window";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { selectCandidate } from "@/store/features/candidatesSlice";
import { selectMatchedCandidates } from "@/store/features/selectors";

// Types
interface Candidate {
  id: string;
  name: string;
  matchScore: number;
  total_exp: number;
  skills: string[];
}

const CandidatePanel = () => {
  const dispatch = useAppDispatch();
  const scoredCandidates = useAppSelector<Candidate[]>(selectMatchedCandidates);
  const selectedId = useAppSelector(
    (state) => state.candidates.selectedCandidateId,
  );

  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        height: window.innerHeight - 100,
        width: 350,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="h-full flex flex-col border-r overflow-hidden bg-white">
      {/* Header Section */}
      <div className="p-4 bg-slate-50 font-bold border-b flex justify-between items-center shrink-0">
        <span className="text-sm uppercase tracking-wider text-slate-500">
          Talent Pool
        </span>
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
          {scoredCandidates.length} Candidates
        </span>
      </div>

      {/* List Section */}
      <div className="flex-1 min-h-0 bg-slate-50">
        {dimensions.height > 0 && scoredCandidates.length > 0 && (
          <FixedSizeList
            height={dimensions.height}
            width={dimensions.width}
            itemCount={scoredCandidates.length}
            itemSize={115}
            // 1. We completely remove the "itemData" prop to avoid the TS overload error!
          >
            {/* 2. We explicitly type index and style here to satisfy ESLint and stop using 'any' */}
            {({
              index,
              style,
            }: {
              index: number;
              style: React.CSSProperties;
            }) => {
              // 3. We pull the data directly from the parent component's scope (closures)
              const person = scoredCandidates[index];

              if (!person) return null;
              const isSelected = selectedId === person.id;

              return (
                <div
                  style={style}
                  onClick={() => dispatch(selectCandidate(person.id))}
                  className={`flex flex-col border-b p-4 cursor-pointer transition-all ${
                    isSelected
                      ? "bg-blue-100 border-l-4 border-l-blue-600 shadow-sm"
                      : "hover:bg-blue-50 bg-white"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-slate-800 truncate pr-2">
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

                  <span className="text-xs text-slate-500 mt-1">
                    {person.total_exp} Years Experience
                  </span>

                  <div className="flex gap-1 mt-2 overflow-hidden">
                    {person.skills.slice(0, 3).map((skill: string) => (
                      <span
                        key={skill}
                        className="text-[10px] bg-slate-200 px-2 py-0.5 rounded-full text-slate-600 truncate"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }}
          </FixedSizeList>
        )}
      </div>
    </div>
  );
};

export default CandidatePanel;

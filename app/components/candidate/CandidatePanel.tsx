"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useAppSelector } from "@/store/hooks";
import { candidates } from "@/generated/prisma";

/**
 * Requirement 6: Performance & Compatibility
 * Using next/dynamic ensures the library is only loaded on the client,
 * which solves the "Export not found" and SSR mismatch issues.
 */
const FixedSizeList = dynamic(
  () => import("react-window").then((mod) => mod.FixedSizeList),
  { ssr: false },
);

const CandidatePanel = () => {
  // Get the candidates from our Redux "Brain"
  // Using 'as candidates[]' to keep the Prisma type safety
  const allCandidates = useAppSelector((state) =>
    Object.values(state.candidates.entities),
  ) as candidates[];

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const person = allCandidates[index];

    // Safety check for the virtualized row
    if (!person) return null;

    return (
      <div
        style={style}
        className="flex flex-col border-b p-4 hover:bg-blue-50 cursor-pointer bg-white"
      >
        <span className="font-bold text-slate-800">{person.name}</span>
        <span className="text-sm text-slate-500">
          {person.total_exp} Years Experience
        </span>
        <div className="flex gap-1 mt-1">
          {person.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-[10px] bg-slate-200 px-2 py-0.5 rounded-full text-slate-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col border-r overflow-hidden">
      <div className="p-4 bg-slate-50 font-bold border-b flex justify-between items-center">
        <span className="text-sm uppercase tracking-wider text-slate-500">
          Candidates
        </span>
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
          {allCandidates.length}
        </span>
      </div>
      <div className="flex-1">
        {/* We use FixedSizeList only if candidates exist to prevent index errors */}
        {allCandidates.length > 0 && (
          <FixedSizeList
            height={800}
            itemCount={allCandidates.length}
            itemSize={100}
            width={"100%"}
          >
            {Row}
          </FixedSizeList>
        )}
      </div>
    </div>
  );
};

export default CandidatePanel;

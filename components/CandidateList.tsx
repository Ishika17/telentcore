"use client";

import React from "react";

interface Candidate {
  id: string;
  name: string;
  email: string;
  role?: string;
  score?: number;
}

interface Props {
  candidates: Candidate[];
}

export default function CandidateList({ candidates }: Props) {
  // Safety: If data is missing or still a Promise, show a skeleton
  if (!candidates || !Array.isArray(candidates)) {
    return (
      <div className="p-4 space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-100 animate-pulse rounded" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 p-4">
      <h2 className="text-xl font-bold mb-4">
        {candidates.length} Candidates Found
      </h2>
      <div className="grid gap-3">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-blue-600">{candidate.name}</p>
              <p className="text-sm text-gray-500">{candidate.email}</p>
            </div>
            {candidate.score && (
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                {Math.round(candidate.score * 100)}% Match
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

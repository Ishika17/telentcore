"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useIsClient } from "@/app/hooks/useIsClient"; // Use the one from your hooks folder
import {
  selectFilteredJDs,
  selectJd,
  setJdSearchQuery,
} from "@/store/features/jdsSlice";

// DELETE the local useIsClient and emptySubscribe functions from here!

const JDPanel = () => {
  const isClient = useIsClient();
  const dispatch = useAppDispatch();
  const filteredJds = useAppSelector(selectFilteredJDs);
  const selectedId = useAppSelector((state) => state.jds.selectedJdId);

  return (
    <div className="flex flex-col h-full bg-slate-50 border-r overflow-hidden">
      <div className="p-4 border-b bg-white shrink-0">
        <h2
          suppressHydrationWarning
          className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-3"
        >
          Job Descriptions
        </h2>
        <input
          type="text"
          placeholder="Search jobs or skills..."
          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
          onChange={(e) => dispatch(setJdSearchQuery(e.target.value))}
        />
      </div>

      <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
        {isClient &&
          filteredJds.map((jd) => {
            const isSelected = selectedId === jd.id;
            return (
              <div
                key={jd.id}
                onClick={() => dispatch(selectJd(jd.id))}
                className={`mx-1 my-1 p-4 rounded-lg cursor-pointer transition-all duration-200 border ${
                  isSelected
                    ? "bg-blue-50 border-blue-500 shadow-sm ring-1 ring-blue-500"
                    : "hover:bg-white hover:shadow-md border-transparent bg-transparent"
                }`}
              >
                <h3
                  className={`font-bold text-sm ${isSelected ? "text-blue-700" : "text-slate-800"}`}
                >
                  {jd.title}
                </h3>
                <p
                  className={`text-xs mt-1 font-medium ${isSelected ? "text-blue-500" : "text-slate-500"}`}
                >
                  Min Exp: {jd.min_exp} years
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default JDPanel;

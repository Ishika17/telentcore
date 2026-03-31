"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  selectFilteredJDs,
  selectJd,
  setJdSearchQuery,
} from "@/store/features/jdsSlice";

const JDPanel = () => {
  const dispatch = useAppDispatch();
  const filteredJds = useAppSelector(selectFilteredJDs);
  const selectedId = useAppSelector((state) => state.jds.selectedJdId);

  return (
    <div className="flex flex-col h-screen border-r bg-slate-50 w-80">
      <div className="p-4 border-b bg-white">
        <h2 className="font-bold text-lg mb-2">Job Descriptions</h2>
        <input
          type="text"
          placeholder="Search jobs or skills..."
          className="w-full p-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={(e) => dispatch(setJdSearchQuery(e.target.value))}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredJds.map((jd) => (
          <div
            key={jd.id}
            onClick={() => dispatch(selectJd(jd.id))}
            className={`p-4 border-b cursor-pointer transition-all ${
              selectedId === jd.id
                ? "bg-blue-600 text-white shadow-inner"
                : "hover:bg-blue-50 text-slate-700"
            }`}
          >
            <h3 className="font-semibold text-sm">{jd.title}</h3>
            <p
              className={`text-xs mt-1 ${selectedId === jd.id ? "text-blue-100" : "text-slate-500"}`}
            >
              Min Exp: {jd.min_exp} years
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JDPanel;

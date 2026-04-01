"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setExpRange, setSortBy } from "@/store/features/jdsSlice";

export default function JDFilters() {
  const dispatch = useAppDispatch();
  const { filters, sortBy } = useAppSelector((state) => state.jds);

  return (
    <div className="px-4 pb-4 space-y-4 border-b border-slate-100 bg-white">
      {/* 1. Experience Range Slider (Req 5.1) */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Min Experience
          </label>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
            {filters.minExp}+ Years
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="15"
          step="1"
          value={filters.minExp}
          onChange={(e) =>
            dispatch(setExpRange({ min: parseInt(e.target.value) }))
          }
          className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-[10px] text-slate-300 font-medium">
          <span>0yr</span>
          <span>15yr</span>
        </div>
      </div>

      {/* 2. Status & Sort Row (Req 5.1) */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(setSortBy("relevance"))}
            className={`text-[10px] font-bold px-2 py-1 rounded transition-colors ${
              sortBy === "relevance"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            RELEVANCE
          </button>
          <button
            onClick={() => dispatch(setSortBy("title"))}
            className={`text-[10px] font-bold px-2 py-1 rounded transition-colors ${
              sortBy === "title"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            A-Z
          </button>
        </div>

        {/* Mock Status Toggle */}
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold text-slate-400 uppercase">
            Live Ads Only
          </span>
        </div>
      </div>
    </div>
  );
}

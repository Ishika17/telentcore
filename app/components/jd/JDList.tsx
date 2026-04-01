"use client";

import { useAppSelector } from "@/store/hooks";
import { selectFilteredJDs } from "@/store/features/jdsSlice";
import { JDSearch } from "./JDSearch";
import { JDCard } from "./JDCard"; // Or whatever your individual item is called

export function JDList() {
  const filteredJds = useAppSelector(selectFilteredJDs);

  return (
    <div className="flex flex-col h-full bg-slate-50/50 border-r border-slate-200 w-[350px]">
      {/* HEADER: Always Visible */}
      <div className="p-6 bg-white border-b border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Job Descriptions</h2>
          <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-md">
            {filteredJds.length} Total
          </span>
        </div>

        {/* Drop the Search component here */}
        <JDSearch />
      </div>

      {/* LIST: Scrollable Section */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
        {filteredJds.length > 0 ? (
          filteredJds.map((jd) => <JDCard key={jd.id} jd={jd} />)
        ) : (
          <div className="py-20 text-center text-slate-400 text-xs">
            No jobs match your search
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectJd } from "@/store/features/jdsSlice";
import { jds } from "@/generated";

interface JDCardProps {
  jd: jds;
}

export function JDCard({ jd }: JDCardProps) {
  const dispatch = useAppDispatch();
  const selectedJdId = useAppSelector((state) => state.jds.selectedJdId);

  const isSelected = selectedJdId === jd.id;

  return (
    <div
      onClick={() => dispatch(selectJd(jd.id))}
      className={`p-4 rounded-xl cursor-pointer transition-all border-2 
        ${
          isSelected
            ? "border-slate-900 bg-white shadow-md ring-1 ring-slate-900/5"
            : "border-transparent bg-white hover:border-slate-200 hover:shadow-sm"
        }`}
    >
      <div className="flex flex-col gap-2">
        {/* Header: Title and Seniority */}
        <div className="flex justify-between items-start">
          <h3
            className={`font-bold text-sm leading-tight transition-colors ${isSelected ? "text-slate-900" : "text-slate-700"}`}
          >
            {jd.title}
          </h3>
          <span className="text-[10px] font-black bg-slate-100 px-1.5 py-0.5 rounded uppercase text-slate-500">
            {jd.min_exp}+ Yrs
          </span>
        </div>

        {/* Skills Preview */}
        <div className="flex flex-wrap gap-1 mt-1">
          {jd.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-[9px] px-2 py-0.5 bg-slate-50 border border-slate-100 rounded-full text-slate-400 font-medium"
            >
              {skill}
            </span>
          ))}
          {jd.skills.length > 3 && (
            <span className="text-[9px] text-slate-300 font-medium self-center">
              +{jd.skills.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

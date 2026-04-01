"use client";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setJdSearchQuery } from "@/store/features/jdsSlice";
import { useDebounce } from "@/app/hooks/useDebouce";

export function JDSearch() {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Debounce the local state by 300ms
  const debouncedSearch = useDebounce(searchTerm, 300);

  // 2. Only dispatch to Redux when the debounced value changes
  useEffect(() => {
    dispatch(setJdSearchQuery(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <div className="relative group">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search 2,000+ Job Descriptions..."
        className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-slate-900 transition-all"
      />
      <span className="absolute left-3 top-3.5 text-slate-400">🔍</span>
    </div>
  );
}

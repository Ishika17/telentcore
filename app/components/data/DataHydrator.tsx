"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setJds } from "@/store/features/jdsSlice";
import { setCandidates } from "@/store/features/candidatesSlice";

export default function DataHydrator() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/api/init");
      const data = await res.json();

      if (data.jds) dispatch(setJds(data.jds));
      if (data.candidates) dispatch(setCandidates(data.candidates));
    }
    loadData();
  }, [dispatch]);

  return null; // This component just manages data, it doesn't render anything
}

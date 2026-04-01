"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import {
  setCandidates,
  setCandidatesLoading,
} from "@/store/features/candidatesSlice";
import { setJds } from "@/store/features/jdsSlice"; // 1. Added import for JDs
import { supabase } from "@/utils/supabaseClient";

export default function DataHydrator() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function loadData() {
      dispatch(setCandidatesLoading(true));

      // 2. FETCH CANDIDATES (Working!)
      const { data: candidateData, error: candidateError } = await supabase
        .from("candidates")
        .select("*");

      if (candidateError) {
        console.error("Error fetching candidates:", candidateError.message);
      }

      if (candidateData) {
        const mappedCandidates = candidateData.map((item) => ({
          id: String(item.id),
          name: item.full_name,
          skills: item.skills,
          total_exp: item.total_experience_years,
          role: item.headline,
          email: item.email,
          appliedJdIds: [],
        }));

        dispatch(setCandidates(mappedCandidates));
      }

      // 3. FETCH JOB DESCRIPTIONS (New!)
      const { data: jdData, error: jdError } = await supabase
        .from("job_descriptions") // ⚠️ Check if your table is named 'jds' or 'job_descriptions' in Supabase
        .select("*");

      if (jdError) {
        console.error("Error fetching JDs:", jdError.message);
      }

      if (jdData) {
        console.log("JD Data Raw:", jdData[0]); // This will log the actual keys to your browser console!

        const mappedJds = jdData.map((jd) => {
          const experienceValue =
            jd.min_experience_years ??
            jd.min_experience ??
            jd.experience ??
            jd.min_exp ??
            0;
          const titleValue = jd.title || jd.role || jd.job_title || "Untitled";
          const rawSkills = jd.required_skills as unknown as
            | string
            | string[]
            | null;
          const skillsArray: string[] =
            typeof rawSkills === "string"
              ? rawSkills
                  .replace(/[{}]/g, "")
                  .split(",")
                  .map((s) => s.trim())
              : (rawSkills as string[]) || [];

          return {
            id: String(jd.id),
            title: titleValue,
            min_exp: Number(experienceValue),
            skills: skillsArray,
          };
        });

        dispatch(setJds(mappedJds));
      }

      dispatch(setCandidatesLoading(false));
    }

    loadData();
  }, [dispatch]);

  return null;
}

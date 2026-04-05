"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import {
  setCandidates,
  setCandidatesLoading,
} from "@/store/features/candidatesSlice";
import { setJds } from "@/store/features/jdsSlice";
import { supabase } from "@/utils/supabaseClient";

// ✅ Define the type locally
interface RawSupabaseCandidate {
  id: string | number;
  skills?: string | string[] | null;
  full_name?: string;
  total_experience_years?: number;
  headline?: string;
  email?: string;
}

interface RawSupabaseApplication {
  candidate_id?: string | number | null;
  jd_id?: string | number | null;
}

export default function DataHydrator() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function loadData() {
      dispatch(setCandidatesLoading(true));

      const PAGE_SIZE = 1000;
      let allCandidates: RawSupabaseCandidate[] = []; // ✅ typed properly
      let from = 0;
      let hasMore = true;

      while (hasMore) {
        const { data, error } = await supabase
          .from("candidates")
          .select("*")
          .range(from, from + PAGE_SIZE - 1);

        if (error) {
          console.error("Error fetching candidates:", error.message);
          break;
        }

        if (!data || data.length === 0) break;

        allCandidates = [
          ...allCandidates,
          ...(data as unknown as RawSupabaseCandidate[]),
        ];
        hasMore = data.length === PAGE_SIZE;
        from += PAGE_SIZE;
      }

      console.log("Total candidates loaded:", allCandidates.length);

      const { data: applicationData, error: applicationError } = await supabase
        .from("applications")
        .select("candidate_id, jd_id");

      const safeApplicationData = applicationError ? [] : applicationData;

      if (applicationError) {
        console.warn(
          "Skipping applications fetch in DataHydrator:",
          applicationError.message,
        );
      }

      const appliedJdIdsByCandidate = new Map<string, string[]>();

      (safeApplicationData as RawSupabaseApplication[] | null)?.forEach((item) => {
        if (!item.candidate_id || !item.jd_id) return;

        const candidateId = String(item.candidate_id);
        const jdId = String(item.jd_id);
        const existing = appliedJdIdsByCandidate.get(candidateId) ?? [];

        if (!existing.includes(jdId)) {
          appliedJdIdsByCandidate.set(candidateId, [...existing, jdId]);
        }
      });

      const mappedCandidates = allCandidates.map((item) => {
        // ✅ Parse skills into string[] here too
        const rawSkills = item.skills;
        const skillsArray: string[] =
          typeof rawSkills === "string"
            ? rawSkills
                .replace(/[{}]/g, "")
                .split(",")
                .map((s) => s.trim())
            : ((rawSkills as string[]) ?? []);

        return {
          id: String(item.id),
          name: item.full_name ?? "Unknown Candidate",
          skills: skillsArray, // ✅ now always string[]
          total_exp: item.total_experience_years ?? 0,
          role: item.headline ?? "No Headline",
          email: item.email ?? "",
          appliedJdIds: appliedJdIdsByCandidate.get(String(item.id)) ?? [],
        };
      });

      dispatch(setCandidates(mappedCandidates));

      // JDs fetch (unchanged)
      const { data: jdData, error: jdError } = await supabase
        .from("job_descriptions")
        .select("*");

      if (jdError) console.error("Error fetching JDs:", jdError.message);

      if (jdData) {
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

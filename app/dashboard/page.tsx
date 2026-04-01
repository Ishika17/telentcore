"use client";

import Sidebar from "@/app/components/layout/Sidebar";
import JDPanel from "@/app/components/jd/JDPanel";
import CandidatePanel from "@/app/components/candidate/CandidatePanel";
import DetailPanel from "@/app/components/detail/DetailPanel";
import DataHydrator from "@/app/components/data/DataHydrator";

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full bg-slate-100 overflow-hidden">
      {/* Fetches the 15,000 records into Redux */}
      <DataHydrator />

      {/* 1. Sidebar - Stays on the far left */}
      <Sidebar />

      {/* 2. Main Content Area - We add padding and gap here */}
      <main className="flex flex-1 p-2 gap-2 overflow-hidden">
        {/* JD Panel - Rounded with Shadow */}
        <section className="w-[320px] flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <JDPanel />
        </section>

        {/* Candidate Panel - Flex-1 to take middle space */}
        <section className="flex-1 min-w-[400px] flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <CandidatePanel />
        </section>

        {/* Detail Panel - Wider for analysis */}
        <section className="w-[450px] flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <DetailPanel />
        </section>
      </main>
    </div>
  );
}

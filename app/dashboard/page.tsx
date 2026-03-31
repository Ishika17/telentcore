import Sidebar from "@/app/components/layout/Sidebar";
import JDPanel from "@/app/components/jd/JDPanel";
import CandidatePanel from "@/app/components/candidate/CandidatePanel";
import DetailPanel from "@/app/components/detail/DetailPanel";

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
      {/* 1. Sidebar - Fixed width */}
      <Sidebar />

      {/* 2. Main Content Area - Scrollable columns */}
      <main className="flex flex-1 overflow-hidden">
        {/* JD Panel (Left) */}
        <section className="w-1/4 border-r border-gray-200 bg-white">
          <JDPanel />
        </section>

        {/* Candidate Panel (Middle) */}
        <section className="w-1/3 border-r border-gray-200 bg-white">
          <CandidatePanel />
        </section>

        {/* Detail Panel (Right) - Takes remaining space */}
        <section className="flex-1 bg-gray-50">
          <DetailPanel />
        </section>
      </main>
    </div>
  );
}

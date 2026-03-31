import Sidebar from "@/app/components/layout/Sidebar";
import JDPanel from "@/app/components/jd/JDPanel";
import CandidatePanel from "@/app/components/candidate/CandidatePanel";
import DetailPanel from "@/app/components/detail/DetailPanel";
import DataHydrator from "@/app/components/data/DataHydrator"; // Add this!

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
      {/* Invisible component to fetch 15,000 records into Redux */}
      <DataHydrator />

      {/* 1. Sidebar - Fixed width */}
      <Sidebar />

      {/* 2. Main Content Area */}
      <main className="flex flex-1 overflow-hidden">
        {/* JD Panel (Left) - 2,000 items */}
        <section className="w-1/4 border-r border-gray-200 bg-white">
          <JDPanel />
        </section>

        {/* Candidate Panel (Middle) - 3,000 items (Virtualized) */}
        <section className="w-1/3 border-r border-gray-200 bg-white">
          <CandidatePanel />
        </section>

        {/* Detail Panel (Right) - Profile & Match Analysis */}
        <section className="flex-1 bg-gray-50 overflow-y-auto">
          <DetailPanel />
        </section>
      </main>
    </div>
  );
}

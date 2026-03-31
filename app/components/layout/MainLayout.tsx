import JDPanel from "../jd/JDPanel";
import CandidatePanel from "../candidate/CandidatePanel";
import DetailPanel from "../detail/DetailPanel";

export default function MainLayout() {
  return (
    <div className="flex flex-1 bg-gray-100">
      {/* JD Panel */}
      <div className="w-[25%] border-r overflow-hidden">
        <JDPanel />
      </div>

      {/* Candidate Panel */}
      <div className="w-[40%] border-r overflow-hidden">
        <CandidatePanel />
      </div>

      {/* Detail Panel */}
      <div className="w-[35%] overflow-hidden">
        <DetailPanel />
      </div>
    </div>
  );
}

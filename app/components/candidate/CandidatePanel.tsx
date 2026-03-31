export default function CandidatePanel() {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b font-semibold">Candidates</div>

      <div className="flex-1 overflow-auto p-4">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="p-3 mb-2 bg-white rounded shadow-sm">
            Candidate #{i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

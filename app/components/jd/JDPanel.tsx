export default function JDPanel() {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b font-semibold">Job Descriptions</div>

      <div className="flex-1 overflow-auto p-4">
        {/* Placeholder list */}
        {[...Array(20)].map((_, i) => (
          <div key={i} className="p-3 mb-2 bg-white rounded shadow-sm">
            JD #{i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

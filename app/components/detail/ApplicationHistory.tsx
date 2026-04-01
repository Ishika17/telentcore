interface HistoryItem {
  id: string;
  title: string;
}

interface HistoryProps {
  history: HistoryItem[];
}

export const ApplicationHistory = ({ history }: HistoryProps) => (
  <section className="pb-10">
    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
      Application History
    </h3>
    <div className="space-y-3">
      {history.length > 0 ? (
        history.map((jd) => (
          <div
            key={jd.id}
            className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center group hover:border-blue-200 transition-all"
          >
            <div>
              <p className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                {jd.title}
              </p>
              <p className="text-[10px] text-slate-400 uppercase font-bold mt-1">
                Applied 2 days ago
              </p>
            </div>
            <span className="text-[9px] font-black px-2 py-1 bg-green-100 text-green-700 rounded-md">
              ACTIVE
            </span>
          </div>
        ))
      ) : (
        <div className="text-center p-8 border-2 border-dashed border-slate-100 rounded-2xl">
          <p className="text-xs text-slate-400 italic">
            No previous applications found.
          </p>
        </div>
      )}
    </div>
  </section>
);

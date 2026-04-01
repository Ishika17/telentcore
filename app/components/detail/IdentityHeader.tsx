import { MatchedCandidate } from "@/store/features/candidatesSlice";

// 1. We use the MatchedCandidate type directly for better consistency
interface IdentityHeaderProps {
  candidate: MatchedCandidate;
}

export const IdentityHeader = ({ candidate }: IdentityHeaderProps) => {
  const { name, matchScore, role, email, total_exp } = candidate;

  return (
    <div className="p-6 border-b sticky top-0 bg-white/90 backdrop-blur-md z-10">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            {name}
          </h2>
          <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mt-1">
            {/* When your DB is ready, these fallbacks will disappear automatically */}
            {role || "Senior Talent"} • {email || "Contact Pending"}
          </p>
        </div>

        <div className="text-right min-w-25">
          <div className="flex items-start justify-end">
            <span
              className={`text-4xl font-black leading-none ${
                matchScore > 75 ? "text-green-600" : "text-blue-600"
              }`}
            >
              {matchScore}
            </span>
            <span
              className={`text-xl font-bold ml-0.5 ${
                matchScore > 75 ? "text-green-600" : "text-blue-600"
              }`}
            >
              %
            </span>
          </div>
          <div className="text-[10px] uppercase tracking-widest font-black text-slate-400 mt-1">
            Match Score
          </div>
        </div>
      </div>

      {/* Requirement 4.1: Experience & Status Badges */}
      <div className="flex gap-3 mt-4">
        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-[10px] font-black border border-slate-200 uppercase">
          {total_exp} Years Exp
        </span>
        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-[10px] font-black border border-blue-100 uppercase">
          Verified Profile
        </span>
      </div>
    </div>
  );
};

export const SkillCloud = ({
  skills,
  jdSkills,
}: {
  skills: string[];
  jdSkills: Set<string>;
}) => (
  <section>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
        Technical Expertise
      </h3>
      <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
        BLUE = JD MATCH
      </span>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => {
        const isMatch = jdSkills.has(skill.toLowerCase());
        return (
          <span
            key={skill}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              isMatch
                ? "bg-blue-600 border-blue-600 text-white shadow-md scale-105"
                : "bg-white border-slate-200 text-slate-500"
            }`}
          >
            {skill}
          </span>
        );
      })}
    </div>
  </section>
);

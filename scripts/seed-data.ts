import fs from "fs";

const escapeCSV = (val: string | number): string =>
  `"${String(val).replace(/"/g, '""')}"`;

const departments = [
  "Engineering",
  "Data & AI",
  "Product",
  "Infrastructure",
  "Design",
  "Marketing",
  "Developer",
];

const roles = [
  "Frontend Engineer",
  "Backend Developer",
  "Data Scientist",
  "DevOps Specialist",
  "UI/UX Designer",
  "Mobile Developer",
  "Full Stack Engineer",
  "Site Reliability Engineer",
  "Tester",
  "Game Developer",
  "AI & ML Engineer",
];

const skillsPool = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Pandas",
  "TypeScript",
  "Docker",
  "Kubernetes",
  "AWS",
  "PostgreSQL",
  "Tailwind CSS",
  "Figma",
  "GSAP",
  "GraphQL",
  "Terraform",
  "Vue.js",
  "Sass",
  "Go",
  "Redis",
  "Framer",
  "Photoshop",
  "Affinity",
  "Blender",
  "After Effects",
  "Data Bricks",
  "TensorFlow",
];

const levels = [
  { label: "Junior", getExp: () => Math.floor(Math.random() * 2) }, // 0-1 years
  { label: "Mid", getExp: () => Math.floor(Math.random() * 3) + 2 }, // 2-4 years
  { label: "Senior", getExp: () => Math.floor(Math.random() * 3) + 5 }, // 5-7 years
  { label: "Lead", getExp: () => Math.floor(Math.random() * 4) + 8 }, // 8-11 years
];

// ─── 1. Job Descriptions ──────────────────────────────────────────────────────
let jds =
  "id,title,department,required_skills,experience_level,min_experience_years\n";

for (let i = 1; i <= 2100; i++) {
  const role = roles[Math.floor(Math.random() * roles.length)];
  const dept = departments[Math.floor(Math.random() * departments.length)];
  const { label, getExp } = levels[Math.floor(Math.random() * levels.length)];
  const minExp = getExp();
  const skills = [...skillsPool]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3 + Math.floor(Math.random() * 4));

  jds += `${i},${escapeCSV(role)},${escapeCSV(dept)},"{${skills.join(",")}}",${label},${minExp}\n`;
}

fs.writeFileSync("job_descriptions.csv", jds);
console.log("✅ Generated 2100 Job Descriptions");

// ─── 2. Candidates ────────────────────────────────────────────────────────────
const firstNames = [
  "Alex",
  "Sam",
  "Elena",
  "Marcus",
  "Priya",
  "John",
  "Sarah",
  "Dev",
  "Li",
  "Anya",
  "Max",
  "Makren",
  "Plato",
  "Arya",
  "Arthur",
  "Violet",
  "Loid",
  "Yor",
  "Rin",
];

const lastNames = [
  "Rivera",
  "Chen",
  "Rostova",
  "Jordan",
  "Smith",
  "Doe",
  "Kumar",
  "Wang",
  "Taylor",
  "Crenaka",
  "Starks",
  "Camus",
  "Evergarden",
];

let candidates = "id,full_name,email,headline,skills,total_experience_years\n";

for (let i = 1; i <= 3200; i++) {
  const fn = firstNames[Math.floor(Math.random() * firstNames.length)];
  const ln = lastNames[Math.floor(Math.random() * lastNames.length)];
  const name = `${fn} ${ln}`;
  const email = `${fn.toLowerCase()}.${ln.toLowerCase()}.${i}@talentcore.dev`;
  const role = roles[Math.floor(Math.random() * roles.length)];
  const exp = Math.floor(Math.random() * 15) + 1;
  const skills = [...skillsPool]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4 + Math.floor(Math.random() * 5));

  candidates += `${i},${escapeCSV(name)},${email},${escapeCSV(role)},"{${skills.join(",")}}",${exp}\n`;
}

fs.writeFileSync("candidates.csv", candidates);
console.log("✅ Generated 3200 Candidates");

// ─── 3. Applications ─────────────────────────────────────────────────────────
const statuses = [
  "Applied",
  "Interviewing",
  "Technical Test",
  "Offered",
  "Rejected",
];

let applications = "id,candidate_id,job_id,match_score,status\n";
let appId = 1;

for (let i = 1; i <= 3200; i++) {
  const numApps = Math.floor(Math.random() * 4) + 1;
  const appliedJds = new Set<number>();

  while (appliedJds.size < numApps) {
    appliedJds.add(Math.floor(Math.random() * 2100) + 1);
  }

  appliedJds.forEach((jobId) => {
    const score = Math.floor(Math.random() * 41) + 60;
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    applications += `${appId},${i},${jobId},${score},${status}\n`;
    appId++;
  });
}

fs.writeFileSync("applications.csv", applications);
console.log(`✅ Generated ${appId - 1} Applications`);

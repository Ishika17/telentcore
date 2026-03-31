import { faker } from "@faker-js/faker";
import fs from "fs";

const generateData = () => {
  // --- 1. GENERATE JDs ---
  const jds = Array.from({ length: 2000 }, () => ({
    id: faker.string.uuid(),
    title: faker.person.jobTitle(),
    minExp: faker.number.int({ min: 1, max: 5 }),
    skills: `{${faker.helpers.arrayElements(["React", "Node", "Postgres", "TypeScript"], 2).join(",")}}`,
  }));

  // --- 2. GENERATE CANDIDATES ---
  const candidates = Array.from({ length: 3000 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    totalExp: faker.number.int({ min: 1, max: 15 }),
    skills: `{${faker.helpers.arrayElements(["React", "Next.js", "Tailwind", "Redux"], 3).join(",")}}`,
  }));

  // --- 3. GENERATE APPLICATIONS (The 3rd Entity) ---
  // We want each candidate to have applied to 2-5 random JDs
  const applications: { jd_id: string; candidate_id: string }[] = [];

  candidates.forEach((candidate) => {
    const randomJDs = faker.helpers.arrayElements(
      jds,
      faker.number.int({ min: 2, max: 5 }),
    );
    randomJDs.forEach((jd) => {
      applications.push({
        jd_id: jd.id,
        candidate_id: candidate.id,
      });
    });
  });

  // --- 4. SAVE ALL 3 TO CSV ---
  // JDs
  const jdCsv = jds
    .map((j) => `${j.id},"${j.title}",${j.minExp},"${j.skills}"`)
    .join("\n");
  fs.writeFileSync("jds.csv", `id,title,minExp,skills\n${jdCsv}`);

  // Candidates
  const candidateCsv = candidates
    .map((c) => `${c.id},"${c.name}",${c.totalExp},"${c.skills}"`)
    .join("\n");
  fs.writeFileSync(
    "candidates.csv",
    `id,name,totalExp,skills\n${candidateCsv}`,
  );

  // Applications (The Bridge)
  const appCsv = applications
    .map((a) => `${a.jd_id},${a.candidate_id}`)
    .join("\n");
  fs.writeFileSync("applications.csv", `jd_id,candidate_id\n${appCsv}`);

  console.log(
    `✅ Success! Generated 2000 JDs, 3000 Candidates, and ${applications.length} Applications.`,
  );
};

generateData();

# TalentCore — High-Scale Talent Intelligence Dashboard

> A production-grade hiring intelligence platform built to handle thousands of Job Descriptions and candidates without performance degradation.

**🔴 Live Demo → [telentcore.vercel.app](https://telentcore.vercel.app)**

---

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js_16-black?style=flat-square&logo=next.js)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)

---

## What It Does

TalentCore is a 3-pane talent intelligence dashboard that matches job descriptions against a live candidate pool in real time using a skill-weighted scoring engine.

- Select a JD → the entire candidate pool re-ranks by match score instantly
- Filter by skills, experience level, or seniority → results update live
- Click any candidate → see full profile, skill match highlights, and application history
- Initiate outreach directly from the detail panel

---

## Performance at Scale

The system handles 5,000+ active records without frame drops or UI stutter:

| Metric         | Scale             | Strategy                                      |
| :------------- | :---------------- | :-------------------------------------------- |
| JD Database    | 2,100 records     | Normalized state + memoized selectors         |
| Candidate Pool | 3,200 records     | `react-virtuoso` virtualization               |
| Search         | Sub-millisecond   | Debounced input + O(1) hash lookups           |
| Match Engine   | Real-time re-rank | `createSelector` + cached computation         |
| Frame Rate     | 60 FPS locked     | `useMemo` / `useCallback` on all heavy arrays |

---

## Architecture Decisions

### 1. Normalized State (Redux Entity Adapter)

Data is stored as flat `{ ids[], entities{} }` maps instead of nested arrays. Finding, updating, or selecting any candidate among 3,200 records is an **O(1) lookup by ID** — eliminating the UI stutter caused by O(n) array scans during filtering.

### 2. Virtualized Rendering

The Talent Pool renders only the items visible in the viewport using `react-virtuoso`. The DOM node count stays constant regardless of dataset size — scrolling through 3,200 candidates costs the same as scrolling through 10.

### 3. Memoized Match Engine

All match score calculations run inside `createSelector`. Scores only recompute when the selected JD or candidate data actually changes — not on every render. This keeps the re-ranking instant even across the full 3,200-candidate pool.

### 4. Skill-Weighted Scoring

```
matchScore = (matchingSkills / jdSkills) × 80
           + experienceBonus (20 pts if exp ≥ jdMinExp, 10 pts if within 2 years)
```

When skill filters are active, scoring narrows to only the selected skills — giving recruiters precise control over ranking.

---

## Folder Structure

```
src/
├── app/                        # Next.js App Router + custom hooks
│   ├── dashboard/page.tsx      # Main 3-pane layout
│   ├── components/
│   │   ├── layout/Sidebar.tsx
│   │   ├── jd/JDPanel.tsx      # JD list, search, filters
│   │   ├── candidate/          # Virtualized candidate pool
│   │   ├── detail/             # Profile + application history
│   │   └── data/DataHydrator   # Supabase → Redux hydration
├── store/
│   ├── store.ts
│   ├── hooks.ts
│   └── features/
│       ├── jdsSlice.ts         # JD state, filters, selectors
│       └── candidatesSlice.ts  # Candidate state + match engine
└── utils/
    └── supabaseClient.ts
```

---

## Edge Case Handling

- **Broken fields** — null-checks and fallbacks applied to every Supabase field before touching Redux state
- **Duplicate entries** — Map-based deduplication in the Redux ingestion layer prevents React key collisions
- **Empty states** — Custom empty states for zero-result filters, unselected profiles, and loading states
- **Skill parsing** — PostgreSQL array strings (`{React,Node.js}`) are safely parsed into JS arrays at the ingestion layer, never in the render tree

---

## Trade-offs

**Client-side matching** — scoring runs in the browser for instant feedback with no round-trip latency. For datasets exceeding 100k records, the right move is PostgreSQL vector search or a dedicated ranking service.

**Test coverage** — given the 48-hour window, priority was placed on architecture correctness and performance over unit test breadth. The selector logic and match algorithm are the highest-value candidates for testing.

---

## Getting Started

```bash
git clone https://github.com/Ishika17/telentcore
cd telentcore
npm install
```

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000)

---

## Live Demo

**[telentcore.vercel.app](https://telentcore.vercel.app)**

Built for the High-Scale Talent Intelligence Frontend Assessment.

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Requirement 6: Performance - Parallel fetching
    const [allJds, allCandidates, allApps] = await Promise.all([
      prisma.jds.findMany({ take: 2000 }),
      prisma.candidates.findMany({ take: 3000 }),
      prisma.applications.findMany(), // Add this if needed for history
    ]);

    return NextResponse.json({ jds: allJds, candidates: allCandidates });
  } catch (error) {
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 },
    );
  }
}

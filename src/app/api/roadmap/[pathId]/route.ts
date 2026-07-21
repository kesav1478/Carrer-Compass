import { NextRequest, NextResponse } from "next/server";
import { fetchRoadmapGraph } from "@/lib/data";

export async function GET(
  request: NextRequest,
  { params }: { params: { pathId: string } }
) {
  try {
    const { pathId } = params;
    const roadmap = await fetchRoadmapGraph(pathId);
    return NextResponse.json(roadmap);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch roadmap data" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { fetchCareerPaths } from "@/lib/data";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const branchId = searchParams.get("branch_id") || undefined;
    const paths = await fetchCareerPaths(branchId);
    return NextResponse.json(paths);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch career paths" }, { status: 500 });
  }
}

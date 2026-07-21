import { NextRequest, NextResponse } from "next/server";
import { fetchBranches } from "@/lib/data";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const optionId = searchParams.get("option_id") || undefined;
    const branches = await fetchBranches(optionId);
    return NextResponse.json(branches);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch branches" }, { status: 500 });
  }
}

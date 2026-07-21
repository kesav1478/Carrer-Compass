import { NextRequest, NextResponse } from "next/server";
import { fetchStreamOptions } from "@/lib/data";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const streamId = searchParams.get("stream_id") || undefined;
    const options = await fetchStreamOptions(streamId);
    return NextResponse.json(options);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch stream options" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { fetchStreams } from "@/lib/data";

export async function GET() {
  try {
    const streams = await fetchStreams();
    return NextResponse.json(streams);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch streams" }, { status: 500 });
  }
}

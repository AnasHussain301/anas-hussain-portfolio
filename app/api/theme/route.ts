import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ theme: "dark", accent: "cyan" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ success: true, theme: body?.theme || "dark" });
}

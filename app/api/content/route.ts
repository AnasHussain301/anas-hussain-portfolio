import { NextResponse } from "next/server";
import { portfolioContent } from "@/lib/portfolio-data";

export async function GET() {
  return NextResponse.json(portfolioContent);
}

export async function POST() {
  return NextResponse.json({ message: "Content is managed from code" });
}

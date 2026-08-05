import { NextResponse } from "next/server";
import { skills } from "@/lib/portfolio-data";

export async function GET() {
  return NextResponse.json(skills);
}

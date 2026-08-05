import { NextResponse } from "next/server";
import { projects } from "@/lib/portfolio-data";

export async function GET() {
  return NextResponse.json(projects);
}

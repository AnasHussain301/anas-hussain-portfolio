import { NextResponse } from "next/server";
import { resume } from "@/lib/portfolio-data";

export async function GET() {
  return NextResponse.json(resume);
}

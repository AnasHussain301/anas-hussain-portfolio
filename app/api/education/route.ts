import { NextResponse } from "next/server";
import { education } from "@/lib/portfolio-data";

export async function GET() {
  return NextResponse.json(education);
}

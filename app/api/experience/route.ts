import { NextResponse } from "next/server";
import { experiences } from "@/lib/portfolio-data";

export async function GET() {
  return NextResponse.json(experiences);
}

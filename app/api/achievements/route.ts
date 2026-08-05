import { NextResponse } from "next/server";
import { achievements } from "@/lib/portfolio-data";

export async function GET() {
  return NextResponse.json(achievements);
}

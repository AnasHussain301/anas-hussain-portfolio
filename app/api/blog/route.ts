import { NextResponse } from "next/server";
import { blogPosts } from "@/lib/portfolio-data";

export async function GET() {
  return NextResponse.json(blogPosts);
}

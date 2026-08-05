import { NextResponse } from "next/server";
import { resume, skills, projects, experiences } from "@/lib/portfolio-data";

export async function POST(request: Request) {
  const body = await request.json();
  const query = String(body?.message || "").toLowerCase();

  if (query.includes("project") || query.includes("work")) {
    return NextResponse.json({ reply: `Recent work includes ${projects.map((project) => project.title).join(", ")}.` });
  }

  if (query.includes("skill") || query.includes("tech")) {
    return NextResponse.json({ reply: `Core strengths include ${skills.map((skill) => skill.name).join(", ")}.` });
  }

  if (query.includes("experience") || query.includes("career")) {
    return NextResponse.json({ reply: `Experience includes ${experiences.map((item) => `${item.role} at ${item.company}`).join("; ")}.` });
  }

  return NextResponse.json({ reply: `${resume.name} is a ${resume.title}. ${resume.summary}` });
}

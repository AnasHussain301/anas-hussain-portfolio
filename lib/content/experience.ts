import type { EducationItem, ExperienceItem } from "./types";

export const experiences: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "RepairDesk",
    period: "July 2026 — Present",
    summary: "Leading development of RAG-based AI support systems on Amazon Bedrock with AWS Lambda, API Gateway, S3, DynamoDB, and vector-search grounding.",
  },
  {
    role: "Freelance Developer",
    company: "Upwork",
    period: "February 2026 — Present",
    summary: "Delivered Unity3D-based VR/MR applications and interactive simulations for international clients.",
  },
  {
    role: "Unity Game Developer & VR Developer Intern",
    company: "UET Game Studio",
    period: "June 2025 — September 2025",
    summary: "Built VR and game applications in Unity3D with a focus on interactive mechanics and simulation behavior.",
  },
  {
    role: "Game Developer Fellow",
    company: "Mindstorm Studios",
    period: "June 2024 — August 2024",
    summary: "Completed an intensive game development fellowship, building prototype projects under industry mentorship.",
  },
];

export const education: EducationItem[] = [
  { degree: "B.Sc. Artificial Intelligence", school: "Information Technology University (ITU)", period: "August 2023 — Present", focus: "AI systems, machine learning, deep learning, MLOps, DevOps, and SaaS" },
  { degree: "Intermediate (Pre-Engineering)", school: "Fazaia Inter College (FIC)", period: "Lahore, Pakistan", focus: "Foundation in mathematics and engineering sciences" },
];

import type { CommandItem, HeroStatItem, NavItem, ResumeItem, SocialLinkItem } from "./types";

export const heroStats: HeroStatItem[] = [
  { label: "Current role", value: "AI Engineer @ RepairDesk" },
  { label: "Focus", value: "RAG + AWS Serverless + SaaS" },
  { label: "Hands-on", value: "Embeddings, vector search, Bedrock" },
  { label: "Built for", value: "Production AI systems" },
];

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const commandItems: CommandItem[] = [
  { label: "Open about", href: "#about", category: "Navigate" },
  { label: "Open skills", href: "#skills", category: "Navigate" },
  { label: "Open projects", href: "#projects", category: "Navigate" },
  { label: "Open contact", href: "#contact", category: "Navigate" },
  { label: "Download resume", href: "/resume.pdf", category: "Actions" },
  { label: "Open GitHub", href: "https://github.com/AnasHussain301", category: "Links" },
  { label: "Open LinkedIn", href: "https://www.linkedin.com/in/anas-hussain-023100230/", category: "Links" },
];

export const socialLinks: SocialLinkItem[] = [
  { label: "GitHub", href: "https://github.com/AnasHussain301" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anas-hussain-023100230/" },
  { label: "Email", href: "mailto:kingdomhouse009@gmail.com" },
];

export const resume: ResumeItem = {
  name: "Anas Hussain",
  title: "AI Engineer | DevOps Engineer | SaaS Developer | VR & MR Developer",
  summary: "Artificial Intelligence student at Information Technology University and AI Engineer at RepairDesk building LLM-powered systems on AWS with RAG, embeddings, serverless architecture, and cloud-native deployment.",
};

export interface NavItem {
  label: string;
  href: string;
}

export interface CommandItem extends NavItem {
  category: string;
}

export interface SkillItem {
  name: string;
  category: string;
  years: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  category: string;
  year: string;
  demoUrl?: string;
  GitHub:string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  focus: string;
}

export interface AchievementItem {
  title: string;
  detail: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export interface BlogPostItem {
  title: string;
  slug: string;
  category: string;
  readTime: string;
  excerpt: string;
  content?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  category: string;
}

export interface SocialLinkItem {
  label: string;
  href: string;
}

export interface ResumeItem {
  name: string;
  title: string;
  summary: string;
}

export interface HeroStatItem {
  label: string;
  value: string;
}

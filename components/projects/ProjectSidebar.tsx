import type { ReactNode } from "react";

type ProjectSidebarProps = {
  title?: string;
  children?: ReactNode;
};

export default function ProjectSidebar({ title = "Project details", children }: ProjectSidebarProps) {
  return (
    <aside className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-300 backdrop-blur-2xl">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 space-y-3">{children}</div>
    </aside>
  );
}
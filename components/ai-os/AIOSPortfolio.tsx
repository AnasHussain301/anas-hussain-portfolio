"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, BrainCircuit, Command, Mail, Menu, Search, Sparkles, Zap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import dynamic from "next/dynamic";
import { achievements, blogPosts, certificates, education, experiences, heroStats, navItems, projects, skills, socialLinks, testimonials } from "@/lib/portfolio-data";

const BackgroundScene = dynamic(() => import("@/components/futuristic/BackgroundScene"), { ssr: false });
const OrbitalScene = dynamic(() => import("@/components/futuristic/OrbitalScene"), { ssr: false });

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.45em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-300/90">{description}</p>
    </div>
  );
}

export default function AIOSPortfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantReply, setAssistantReply] = useState("Ask about my work, skills, or projects.");
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const [sending, setSending] = useState(false);
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 900);
    const handle = (event: MouseEvent) => setCursorPosition({ x: event.clientX, y: event.clientY });
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setShowPalette((value) => !value);
      }
      if (event.key === "Escape") {
        setShowPalette(false);
        setAssistantOpen(false);
      }
    };

    const loadVisitor = async () => {
      try {
        const response = await fetch("/api/visitor");
        const data = await response.json();
        setVisitorCount(data.count);
      } catch {
        setVisitorCount(0);
      }
    };

    loadVisitor();
    window.addEventListener("mousemove", handle);
    window.addEventListener("keydown", onKey);
    document.body.style.cursor = "none";

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("mousemove", handle);
      window.removeEventListener("keydown", onKey);
      document.body.style.cursor = "default";
    };
  }, []);

  const filteredProjects = useMemo(() => {
    const value = query.toLowerCase();
    if (!value) return projects;
    return projects.filter((item) => [item.title, item.description, item.category].join(" ").toLowerCase().includes(value));
  }, [query]);

  const askAssistant = async () => {
    const response = await fetch("/api/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: query || "Who are you?" }),
    });
    const data = await response.json();
    setAssistantReply(data.reply || "I’m ready to help.");
    setAssistantOpen(true);
  };

    const sendMessage = async () => {
  if (!name.trim()) {
    alert("Please enter your name.");
    return;
  }

  if (!email.trim()) {
    alert("Please enter your email.");
    return;
  }

  const emailRegex =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!message.trim()) {
    alert("Please enter your message.");
    return;
  }

  try {
    setSending(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    alert("Message sent successfully!");

    setName("");
    setEmail("");
    setMessage("");

  } catch (err: any) {
    alert(err.message);
  } finally {
    setSending(false);
  }
};

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(0,217,255,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.22),transparent_24%),linear-gradient(135deg,#050816_0%,#060b1f_40%,#050816_100%)]" />
      <BackgroundScene />

      <motion.div className="fixed inset-x-0 top-0 z-[140] h-1 origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500" style={{ scaleX }} />
      <motion.div animate={{ x: cursorPosition.x - 9, y: cursorPosition.y - 9 }} transition={{ type: "spring", stiffness: 200, damping: 16 }} className="pointer-events-none fixed left-0 top-0 z-[200] h-4 w-4 rounded-full border border-cyan-300/80 bg-cyan-400/20" />
      <motion.div animate={{ x: cursorPosition.x - 24, y: cursorPosition.y - 24 }} transition={{ type: "spring", stiffness: 140, damping: 20 }} className="pointer-events-none fixed left-0 top-0 z-[190] h-12 w-12 rounded-full border border-cyan-400/20 bg-cyan-400/10" />

      <header className="sticky top-0 z-[120] border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_25px_rgba(0,217,255,0.25)]">
              <BrainCircuit className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-200">Anas</p>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">AI OS</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300/80 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => setShowPalette(true)} className="hidden rounded-full border border-cyan-400/30 bg-white/8 px-3 py-2 text-sm text-slate-200 backdrop-blur-xl md:flex">
              <Command className="mr-2 h-4 w-4" /> Ctrl + K
            </motion.button>
            <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => setAssistantOpen(true)} className="rounded-full border border-cyan-400/40 bg-cyan-400/15 px-3 py-2 text-sm text-cyan-100">
              <Sparkles className="mr-2 inline h-4 w-4" /> AI Assistant
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>{!isLoaded && <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[300] flex items-center justify-center bg-[#03050e]"><div className="flex flex-col items-center gap-4"><div className="h-20 w-20 rounded-full border border-cyan-400/40" /><p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Booting AI OS</p></div></motion.div>}</AnimatePresence>

      <main className="relative z-10">
        <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-6 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-6 flex flex-wrap gap-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-full border border-cyan-400/30 bg-white/8 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">{stat.label}: {stat.value}</div>
              ))}
            </div>
            <h1 className="text-[clamp(3.4rem,8vw,7.4rem)] font-black uppercase leading-[0.9] tracking-[0.14em] text-white">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">ANAS</span>
              <span className="block text-slate-100">HUSSAIN</span>
            </h1>
            <div className="mt-6 flex min-h-[3rem] items-center text-xl font-medium text-cyan-300 sm:text-2xl">
              <TypeAnimation sequence={["AI Engineer", 900, "Machine Learning Engineer", 900, "Deep Learning Engineer", 900, "Full Stack Developer", 900, "MLOps Engineer", 900, "Cloud Engineer", 900, "Software Engineer", 900]} wrapper="span" speed={45} repeat={Infinity} />
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300/90">I build production-ready AI systems, machine learning infrastructure, and backend services that solve real business problems.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a href="#projects" whileHover={{ scale: 1.04, y: -2 }} className="inline-flex items-center gap-3 rounded-full border border-cyan-400/50 bg-gradient-to-r from-cyan-400/25 to-sky-400/20 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(0,217,255,0.2)] backdrop-blur-xl">View Projects <ArrowRight className="h-4 w-4" /></motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.04, y: -2 }} className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-xl">Let’s Connect</motion.a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <motion.a key={item.label} href={item.href} whileHover={{ y: -4, scale: 1.06 }} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-slate-200 backdrop-blur-xl">
                  {item.label === "GitHub" ? <FaGithub className="h-4 w-4" /> : item.label === "LinkedIn" ? <FaLinkedin className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                </motion.a>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(0,217,255,0.8)]" />
              Live visitor pulse: {visitorCount ?? "syncing"}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 shadow-[0_0_120px_rgba(0,217,255,0.12)] backdrop-blur-2xl">
            <div className="mb-6 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80">
              <div className="relative h-[320px] w-full">
                <Image
                  src="/images/img.jpg"
                  alt="Anas Hussain profile photo"
                  fill
                  className="object-cover"
                  quality={90}
                  priority
                />
              </div>
            </div>
            <OrbitalScene />
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="About" title="AI engineering with production-grade focus" description="I deliver reliable backend systems, LLM tooling, and deployment pipelines for product teams, not just polished interfaces." />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="rounded-[2rem] border border-white/10 bg-white/8 p-8 backdrop-blur-2xl">
              <p className="text-lg leading-8 text-slate-300/90">I build systems at the intersection of AI, backend automation, and developer workflows. I focus on clear, maintainable engineering that powers products at scale.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {achievements.map((achievement) => (
                  <div key={achievement.title} className="rounded-[1.25rem] border border-cyan-400/20 bg-slate-950/70 p-4">
                    <h3 className="text-white">{achievement.title}</h3>
                    <p className="mt-2 text-sm text-slate-300/80">{achievement.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-950/70 to-indigo-500/10 p-8 backdrop-blur-2xl">
              <h3 className="text-xl font-semibold text-white">Engineering focus</h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-300/85">
                <li>• Production LLM workflows, retrieval-augmented generation, and model-driven automation</li>
                <li>• Serverless AWS deployment, observability, and secure data pipelines</li>
                <li>• MLOps, vector search, and scalable inference infrastructure</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Skills" title="Core engineering systems" description="Tools and platforms I use to ship AI solutions with observability, performance, and scale." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div key={skill.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }} whileHover={{ y: -8, scale: 1.02, rotateX: 4, rotateY: -4 }} className="rounded-[1.75rem] border border-white/10 bg-white/8 p-6 backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300">{skill.category}</div>
                  <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(0,217,255,0.65)]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{skill.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300/80">{skill.description}</p>
                <p className="mt-4 text-sm font-medium text-cyan-300">{skill.years}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Experience" title="Building production-grade AI systems" description="A timeline of backend, AI, and infrastructure work delivered across startups and fast-moving teams." />
          <div className="mt-12 space-y-6">
            {experiences.map((item, index) => (
              <motion.div key={item.role} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} className="rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/60 p-7 backdrop-blur-2xl">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-cyan-300">{item.role}</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">{item.company}</h3>
                  </div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.period}</p>
                </div>
                <p className="mt-4 text-sm leading-8 text-slate-300/85">{item.summary}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Projects" title="AI systems engineered for impact" description="A curated view into the systems I’ve built across AI, cloud, and scalable product engineering." />
          <div className="mt-10 flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-2xl md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-full border border-white/10 bg-slate-950/70 px-4 py-3">
              <Search className="h-4 w-4 text-cyan-300" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" className="w-full bg-transparent text-sm text-slate-200 outline-none" />
            </div>
            <div className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">{filteredProjects.length} results</div>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} whileHover={{ y: -10, rotateX: 6, rotateY: -6, scale: 1.02 }} className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-7 backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300">{project.category}</span>
                  <span className="text-sm text-slate-400">{project.year}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-8 text-slate-300/85">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">{tag}</span>)}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.demoUrl ?? undefined}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition ${project.demoUrl ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-100 hover:bg-cyan-400/20" : "cursor-not-allowed border-white/10 bg-white/5 text-slate-500"}`}
                    aria-disabled={!project.demoUrl}
                  >
                    Live Demo
                  </a>
                  <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400/40 hover:text-cyan-100">GitHub</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section
  id="blog"
  className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10"
>
  <SectionHeading
    eyebrow="Blog"
    title="Thoughtful writing on AI engineering"
    description="Deep technical articles on LLMs, Retrieval-Augmented Generation, AI Agents, AWS, LangChain, LangGraph and production AI systems."
  />

  <div className="mt-12 grid gap-8 lg:grid-cols-2">
    {blogPosts.map((post, index) => (
      <motion.article
        key={post.slug}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="rounded-3xl border border-cyan-500/20 bg-slate-950/70 p-8 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            {post.category}
          </span>

          <span className="text-sm text-zinc-400">
            {post.readTime}
          </span>
        </div>

        <h3 className="mt-6 text-3xl font-bold text-white">
          {post.title}
        </h3>

        <p className="mt-5 leading-8 text-zinc-400">
          {post.excerpt}
        </p>

        <div className="mt-8">
          <a
            href={`/blog/${post.slug}`}
            className="inline-flex items-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            Read Full Article →
          </a>
        </div>
      </motion.article>
    ))}
  </div>
</section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Journey" title="Education, credentials, and trusted voices" description="A deeper view of the foundation, recognition, and perspective behind the work." />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-7 backdrop-blur-2xl">
              <h3 className="text-xl font-semibold text-white">Education</h3>
              <div className="mt-6 space-y-4">
                {education.map((item) => (
                  <div key={item.degree} className="rounded-[1.25rem] border border-cyan-400/20 bg-white/5 p-4">
                    <p className="text-cyan-300">{item.degree}</p>
                    <p className="mt-2 text-sm text-slate-300/80">{item.school} • {item.period}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.focus}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-950/70 to-indigo-500/10 p-7 backdrop-blur-2xl">
              <h3 className="text-xl font-semibold text-white">Testimonials</h3>
              <div className="mt-6 space-y-4">
                {testimonials.map((item) => (
                  <div key={item.name} className="rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-4">
                    <p className="text-sm leading-7 text-slate-300/85">“{item.quote}”</p>
                    <p className="mt-3 text-sm font-semibold text-cyan-300">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:px-8 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-950/70 to-indigo-500/10 p-8 backdrop-blur-2xl sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Build the next AI product with reliable infrastructure.</h2>
                <p className="mt-4 text-lg leading-8 text-slate-300/90">If you’re building AI systems, data pipelines, or developer tooling, let’s collaborate.</p>
              </div>
              <form onSubmit={(e:any)=>{e.preventDefault();sendMessage();}} className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
                <input
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="Name" className="mb-4 w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 outline-none" />
                <input
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder="Email"
type="email" className="mb-4 w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 outline-none" />
                <textarea
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Tell me about your idea" rows={4} className="mb-4 w-full rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 outline-none" />
                <motion.button type="submit" disabled={sending} whileHover={{ scale: 1.02, y: -2 }} className="inline-flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-400/15 px-5 py-3 text-sm font-semibold text-cyan-100 disabled:opacity-60">{sending ? "Sending..." : "Send message"} <ArrowRight className="h-4 w-4" /></motion.button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      <AnimatePresence>
        {showPalette && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[250] flex items-center justify-center bg-slate-950/60 backdrop-blur-md">
            <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} className="w-[min(90vw,640px)] rounded-[2rem] border border-cyan-400/25 bg-slate-950/80 p-6 shadow-[0_0_80px_rgba(0,217,255,0.2)]">
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3">
                <Search className="h-4 w-4 text-cyan-300" />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search portfolio" className="w-full bg-transparent text-sm text-slate-200 outline-none" />
              </div>
              <div className="mt-6 space-y-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setShowPalette(false)} className="flex items-center justify-between rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    <span>{item.label}</span>
                    <span className="text-cyan-300">Navigate</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {assistantOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[250] flex items-end justify-center bg-slate-950/60 p-4 backdrop-blur-md sm:items-center">
            <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }} className="w-full max-w-xl rounded-[2rem] border border-cyan-400/25 bg-slate-950/90 p-6 shadow-[0_0_80px_rgba(0,217,255,0.2)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">AI Assistant</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">Ask about my work</h3>
                </div>
                <button onClick={() => setAssistantOpen(false)} className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300">Close</button>
              </div>
              <div className="mt-6 flex gap-3">
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ask about projects, skills, experience..." className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 outline-none" />
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={askAssistant} className="rounded-full border border-cyan-400/30 bg-cyan-400/15 px-4 py-3 text-sm text-cyan-100">Ask</motion.button>
              </div>
              <div className="mt-6 rounded-[1.25rem] border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-8 text-slate-200">{assistantReply}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Cpu,
  Layers3,
  Network,
  ScanEye,
  Sparkles,
  Zap,
} from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import { FaDocker, FaGithub, FaLinkedin, FaPython, FaReact } from "react-icons/fa";
import { SiFramer, SiNextdotjs, SiNvidia, SiTailwindcss, SiTensorflow, SiThreedotjs } from "react-icons/si";
import dynamic from "next/dynamic";

const BackgroundScene = dynamic(() => import("./BackgroundScene"), {
  ssr: false,
});
const OrbitalScene = dynamic(() => import("./OrbitalScene"), {
  ssr: false,
});

const heroBadges = ["AI Systems", "MLOps", "Cloud", "Data"];

const stats = [
  { label: "Years building AI products", value: 5, suffix: "+" },
  { label: "Production systems shipped", value: 28, suffix: "+" },
  { label: "Models orchestrated", value: 120, suffix: "+" },
  { label: "Global users impacted", value: 1.2, suffix: "M" },
];

const skills = [
  { name: "Python", icon: FaPython, glow: "from-cyan-400/40 to-sky-500/20" },
  { name: "React", icon: FaReact, glow: "from-sky-400/40 to-indigo-500/20" },
  { name: "Next.js", icon: SiNextdotjs, glow: "from-slate-400/40 to-cyan-400/20" },
  { name: "TensorFlow", icon: SiTensorflow, glow: "from-orange-400/40 to-red-500/20" },
  { name: "Docker", icon: FaDocker, glow: "from-cyan-400/40 to-blue-500/20" },
  { name: "Framer", icon: SiFramer, glow: "from-fuchsia-400/40 to-purple-500/20" },
];

const projects = [
  {
    title: "Neural Commerce OS",
    blurb: "A multi-agent commerce backend with live forecasting, secure workflows, and AI-led automation.",
    stack: ["Next.js", "Three.js", "MCP", "PyTorch"],
  },
  {
    title: "Vision Atlas",
    blurb: "Real-time computer vision analytics for industrial inspection and anomaly detection.",
    stack: ["Python", "OpenCV", "TensorFlow", "FastAPI"],
  },
  {
    title: "Halo Studio",
    blurb: "A scalable product engine for connected visualization, data pipelines, and workflow automation.",
    stack: ["React", "WebGL", "Cloud", "Unity"],
  },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.45em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-300/90">{description}</p>
    </div>
  );
}

function GlassChip({ label }: { label: string }) {
  return (
    <motion.span
      whileHover={{ y: -4, scale: 1.03, rotateX: 4, rotateY: -4 }}
      className="rounded-full border border-cyan-400/30 bg-white/8 px-4 py-2 text-sm text-slate-200 shadow-[0_0_40px_rgba(0,217,255,0.12)] backdrop-blur-xl"
    >
      {label}
    </motion.span>
  );
}

function OrbitalIcon({ icon: Icon, label, style }: { icon: any; label: string; style?: CSSProperties }) {
  return (
    <motion.div
      className="absolute flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950/70 text-cyan-200 shadow-[0_0_25px_rgba(0,217,255,0.25)] backdrop-blur-xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(0,217,255,0.4)" }}
      style={style}
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 1100);
    const handleMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    document.body.style.cursor = "none";

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("mousemove", handleMove);
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(0,217,255,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.22),transparent_24%),linear-gradient(135deg,#050816_0%,#060b1f_40%,#050816_100%)]" />
      <BackgroundScene />

      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#03050e]"
          >
            <div className="relative flex h-60 w-60 items-center justify-center rounded-full border border-cyan-400/50 bg-white/5 shadow-[0_0_120px_rgba(0,217,255,0.22)] backdrop-blur-2xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border border-cyan-400/30"
              />
              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="absolute inset-8 rounded-full border border-cyan-300/40"
              />
              <div className="flex flex-col items-center gap-3">
                <BrainCircuit className="h-12 w-12 text-cyan-300" />
                <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Initializing future</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ x: cursorPosition.x - 12, y: cursorPosition.y - 12 }}
        transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-[120] h-6 w-6 rounded-full border border-cyan-300/80 bg-cyan-400/15 backdrop-blur-md"
      />
      <motion.div
        animate={{ x: cursorPosition.x - 28, y: cursorPosition.y - 28 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.25 }}
        className="pointer-events-none fixed left-0 top-0 z-[110] h-14 w-14 rounded-full border border-cyan-400/20 bg-cyan-400/10"
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_25px_rgba(0,217,255,0.25)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-200">Anas Hussain</p>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">AI engineer</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300/80 md:flex">
            <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="mb-6 flex flex-wrap gap-3">
              {heroBadges.map((item) => (
                <GlassChip key={item} label={item} />
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 blur-3xl">
                <div className="h-72 w-72 rounded-full bg-cyan-400/30" />
              </div>
              <h1 className="text-[clamp(3.2rem,8vw,7.3rem)] font-black uppercase leading-[0.9] tracking-[0.12em] text-white">
                <span className="block bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">ANAS</span>
                <span className="block text-[1.05em] text-slate-100">HUSSAIN</span>
              </h1>
            </div>

            <div className="mt-8 flex min-h-[3.2rem] items-center text-xl font-medium text-cyan-300 sm:text-2xl">
              <TypeAnimation
                sequence={[
                  "AI Engineer",
                  1200,
                  "Machine Learning Engineer",
                  1200,
                  "Deep Learning Engineer",
                  1200,
                  "Full Stack Developer",
                  1200,
                  "MLOps Engineer",
                  1200,
                  "Cloud Engineer",
                  1200,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300/90">
              I build reliable AI systems, data products, and backend workflows that combine machine learning with operational rigor.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2, boxShadow: "0 0 40px rgba(0,217,255,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 rounded-full border border-cyan-400/50 bg-gradient-to-r from-cyan-400/25 to-sky-400/20 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(0,217,255,0.2)] backdrop-blur-xl"
              >
                Explore the work <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-xl"
              >
                <ScanEye className="h-4 w-4" /> View capabilities
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-400/15 via-transparent to-indigo-500/20 blur-3xl" />
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 shadow-[0_0_120px_rgba(0,217,255,0.12)] backdrop-blur-2xl">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(15,23,42,0.8))] p-4">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]" />
                <OrbitalScene />
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8, rotateX: 6, rotateY: -6, scale: 1.02 }}
                className="rounded-[1.5rem] border border-cyan-400/20 bg-white/8 p-6 shadow-[0_0_50px_rgba(0,217,255,0.12)] backdrop-blur-2xl"
              >
                <p className="text-4xl font-semibold text-cyan-300">
                  <CountUp end={typeof stat.value === "number" ? stat.value : 0} decimals={stat.value % 1 !== 0 ? 1 : 0} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Core stack"
            title="Systems built with intelligence and reliability"
            description="Every feature is grounded in machine learning, performance, and clear engineering."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={{ y: -10, rotateX: 6, rotateY: -6, scale: 1.02 }}
                  className={`rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${skill.glow} p-[1px]`}
                >
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-7 backdrop-blur-2xl">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(0,217,255,0.2)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(0,217,255,0.65)]" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{skill.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300/80">
                      Built for speed, clarity, and stable production operations.
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Selected work"
            title="Products built for AI and engineering scale"
            description="Each project is grounded in practical machine learning, cloud deployment, and systems reliability."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: -6, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-7 shadow-[0_0_60px_rgba(0,217,255,0.12)] backdrop-blur-2xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,217,255,0.16),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent)]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300">
                      product showcase
                    </div>
                    <Layers3 className="h-5 w-5 text-cyan-300" />
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-slate-300/85">{project.blurb}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-950/70 to-indigo-500/10 p-8 shadow-[0_0_80px_rgba(0,217,255,0.14)] backdrop-blur-2xl sm:p-12"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">Available for high-impact engineering work</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Let’s build the next AI product with reliable infrastructure.</h2>
                <p className="mt-4 text-lg leading-8 text-slate-300/90">
                  From concept to shipped product, I build backend systems, ML workflows, and cloud automation that scale.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="mailto:anas@aifuture.dev"
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="inline-flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-400/15 px-5 py-3 text-sm font-semibold text-cyan-100"
                >
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </motion.a>
                <div className="flex gap-3">
                  {[FaGithub, FaLinkedin, Network].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -4, scale: 1.06 }}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-slate-200 backdrop-blur-xl"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

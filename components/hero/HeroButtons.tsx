import { Download, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-5">
      <a
        href="/resume.pdf"
        className="rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
      >
        <Download className="mr-2 inline h-5 w-5" />
        Resume
      </a>

      <a
        href="https://www.linkedin.com/in/anas-hussain-023100230"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-cyan-400/30 bg-white/5 px-8 py-4 backdrop-blur-xl transition hover:border-cyan-400"
      >
        <FaLinkedin className="mr-2 inline h-5 w-5" />
        LinkedIn
      </a>

      <a
        href="#contact"
        className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 backdrop-blur-xl transition hover:border-white"
      >
        <Mail className="mr-2 inline h-5 w-5" />
        Contact
      </a>
    </div>
  );
}
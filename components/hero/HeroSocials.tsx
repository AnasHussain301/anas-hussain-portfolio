import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSocials() {
  return (
    <div className="mt-10 flex justify-center gap-6 text-3xl">
      <a
        href="https://github.com/AnasHussain301"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-cyan-400"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/anas-hussain-023100230"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-cyan-400"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
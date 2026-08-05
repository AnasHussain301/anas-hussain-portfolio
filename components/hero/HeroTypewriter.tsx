"use client";

import { TypeAnimation } from "react-type-animation";

export default function HeroTypewriter() {
  return (
    <div className="mt-8 text-2xl text-cyan-400 md:text-4xl">
      <TypeAnimation
        sequence={[
          "AI Engineer",
          1500,
          "RAG + AWS Automation",
          1500,
          "Production ML Systems",
          1500,
          "MLOps Engineering",
          1500,
          "Serverless AI Infrastructure",
          1500,
        ]}
        repeat={Infinity}
      />
    </div>
  );
}
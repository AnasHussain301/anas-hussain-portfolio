"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[-250px] top-[-250px] h-[650px] w-[650px] rounded-full bg-cyan-500/20 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 80, -80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-250px] right-[-250px] h-[650px] w-[650px] rounded-full bg-violet-600/20 blur-[220px]"
      />
    </>
  );
}
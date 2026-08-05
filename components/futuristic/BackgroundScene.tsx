"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 56 }, (_, index) => ({
  id: index,
  left: `${(index * 13) % 100}%`,
  top: `${(index * 17) % 100}%`,
  size: `${(index % 4) + 1}px`,
  delay: index * 0.08,
}));

const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 19) % 100}%`,
  top: `${(index * 23) % 100}%`,
  size: `${(index % 6) + 5}px`,
  delay: index * 0.1,
}));

const cubes = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  left: `${(index * 11) % 100}%`,
  top: `${(index * 9) % 100}%`,
  rotate: index * 18,
}));

const hexes = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  left: `${(index * 14 + 8) % 100}%`,
  top: `${(index * 13 + 13) % 100}%`,
}));

export default function BackgroundScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,217,255,0.18),transparent_26%),radial-gradient(circle_at_84%_16%,rgba(79,70,229,0.22),transparent_24%),linear-gradient(135deg,#050816_0%,#060b1f_40%,#050816_100%)]" />

      <motion.div
        animate={{ x: [0, 24, -12, 0], y: [0, -16, 12, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-12%] top-[-10%] h-[42rem] w-[42rem] rounded-full bg-cyan-400/12 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -18, 12, 0], y: [0, 20, -8, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-8%] right-[-8%] h-[38rem] w-[38rem] rounded-full bg-indigo-500/14 blur-[120px]"
      />

      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)", backgroundSize: "120px 120px" }} />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "radial-gradient(circle at center, transparent 0 35%, rgba(0,217,255,0.08) 35% 36%, transparent 36% 100%)", backgroundSize: "220px 220px" }}
      />

      {stars.map((star) => (
        <motion.span
          key={star.id}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.4 + (star.id % 6) * 0.3, repeat: Infinity, delay: star.delay }}
          className="absolute rounded-full bg-white/90"
          style={{ left: star.left, top: star.top, width: star.size, height: star.size }}
        />
      ))}

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{ y: [0, -12, 0], x: [0, 10, 0], opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 4 + (particle.id % 5), repeat: Infinity, delay: particle.delay }}
          className="absolute rounded-full bg-cyan-300/50 blur-[1px]"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
        />
      ))}

      {cubes.map((cube) => (
        <motion.div
          key={cube.id}
          animate={{ y: [0, -16, 0], rotate: [cube.rotate, cube.rotate + 18, cube.rotate] }}
          transition={{ duration: 7 + (cube.id % 4), repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-8 w-8 border border-cyan-400/20 bg-white/5 backdrop-blur-md"
          style={{ left: cube.left, top: cube.top }}
        />
      ))}

      {hexes.map((hex) => (
        <motion.div
          key={hex.id}
          animate={{ rotate: [0, 360], scale: [0.9, 1.03, 0.9] }}
          transition={{ duration: 12 + (hex.id % 4), repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-12 w-12 border border-cyan-300/20"
          style={{
            left: hex.left,
            top: hex.top,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />
      ))}

      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -28, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[12%] top-[24%] h-40 w-40 rounded-full border border-cyan-300/20"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 24, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[18%] h-56 w-56 rounded-full border border-indigo-400/20"
      />

      <div className="absolute inset-x-0 bottom-0 h-[28rem] bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      <div className="absolute inset-x-0 top-0 h-[20rem] bg-gradient-to-b from-cyan-400/8 via-transparent to-transparent" />
    </div>
  );
}

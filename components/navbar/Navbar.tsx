"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed left-1/2 top-5 z-50 -translate-x-1/2"
    >
      <div className="rounded-full border border-white/10 bg-white/5 px-8 py-4 shadow-xl backdrop-blur-2xl">
        <div className="flex gap-8">
          {NAV_LINKS.map((item) => (
            <Link key={item.title} href={item.href} className="text-gray-300 transition hover:text-cyan-400">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
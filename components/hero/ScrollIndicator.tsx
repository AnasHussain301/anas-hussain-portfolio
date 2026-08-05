"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ repeat: Infinity, duration: 1.8 }}
      className="mt-20 flex justify-center"
    >
      <ChevronDown size={34} />
    </motion.div>
  );
}
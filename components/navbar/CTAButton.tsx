"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTAButton() {
  return (
    <Link href="/contact">
      <motion.div
        whileHover={{
          scale: 1.04,
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 20,
        }}
        className="group relative overflow-hidden rounded-full"
      >
        {/* Glow */}
        <div
          className="
            absolute
            -inset-1
            rounded-full
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-blue-600
            opacity-0
            blur-xl
            transition-opacity
            duration-500
            group-hover:opacity-70
          "
        />

        {/* Button */}
        <div
          className="
            relative
            flex
            h-11
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            px-6
            font-medium
            text-white
            shadow-lg
            shadow-blue-600/20
            transition-all
            duration-300
          "
        >
          <span>Book Demo</span>

          <motion.div
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
          >
            <ArrowRight
              size={18}
              strokeWidth={2.2}
            />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
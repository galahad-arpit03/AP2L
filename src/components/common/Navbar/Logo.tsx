"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface LogoProps {
  priority?: boolean;
}

export default function Logo({
  priority = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      className="group relative flex items-center gap-3"
      aria-label="AP2L Home"
    >
      {/* Logo */}
      <motion.div
        whileHover={{
          scale: 1.06,
          rotate: 4,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
        className="relative"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-violet-500/40 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-slate-900/10 bg-slate-900/5 backdrop-blur-xl">
          <Image
            src="/logo/logo.png"
            alt="AP2L Logo"
            width={42}
            height={42}
            priority={priority}
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Brand */}
      <div className="flex flex-col leading-none">
        <motion.span
          whileHover={{
            x: 2,
          }}
          className="text-[1.45rem] font-bold tracking-tight text-black"
        >
          AP2L
        </motion.span>
        <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-slate-600">
          ApMoSys Products
        </span>
      </div>
    </Link>
  );
}
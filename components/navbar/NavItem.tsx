"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavItemProps {
  title: string;
  href: string;
  active?: boolean;
}

export default function NavItem({
  title,
  href,
  active = false,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-10 items-center"
    >
      <span
        className={`text-[15px] font-medium transition-colors duration-300 ${
          active
            ? "text-white"
            : "text-slate-300 group-hover:text-white"
        }`}
      >
        {title}
      </span>

      <motion.span
        layoutId="navbar-indicator"
        className="absolute -bottom-[2px] left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{
          duration: 0.25,
        }}
        style={{
          transformOrigin: "left",
        }}
      />
    </Link>
  );
}
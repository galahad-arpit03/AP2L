"use client";

import Link from "next/link";

interface LogoProps {
  white?: boolean;
}

export default function Logo({
  white = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
    >
      {/* Logo Mark */}
      <div
        className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        bg-gradient-to-br
        from-blue-600
        via-blue-500
        to-cyan-400
        shadow-lg
        shadow-blue-500/20
        transition-all
        duration-300
        group-hover:scale-105
        group-hover:rotate-3
      "
      >
        {/* Shield */}
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5z" />
          <path d="M9.5 12.5l2 2 4-4" />
        </svg>

        {/* Glow */}
        <div
          className="
          absolute
          inset-0
          rounded-xl
          bg-cyan-400/20
          blur-xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        />
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className={`text-xl font-bold tracking-tight ${
            white ? "text-white" : "text-slate-900"
          }`}
        >
          ShieldVUE
        </span>

        <span
          className={`text-xs tracking-[0.22em] uppercase ${
            white
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          Cyber Security
        </span>
      </div>
    </Link>
  );
}
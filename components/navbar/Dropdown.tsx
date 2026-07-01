"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export interface DropdownItem {
  title: string;
  description?: string;
  href: string;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
}

export default function Dropdown({
  title,
  items,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}

      <button
        className="group flex h-10 items-center gap-1 text-[15px] font-medium text-slate-300 transition hover:text-white"
      >
        {title}

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 10,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              absolute
              left-1/2
              top-14
              z-50
              w-80
              -translate-x-1/2
            "
          >
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-950/90
                p-3
                shadow-2xl
                backdrop-blur-2xl
              "
            >
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="
                    block
                    rounded-2xl
                    p-4
                    transition-all
                    duration-300
                    hover:bg-white/5
                  "
                >
                  <h4 className="font-semibold text-white">
                    {item.title}
                  </h4>

                  {item.description && (
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
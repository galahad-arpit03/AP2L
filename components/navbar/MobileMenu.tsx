"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Button from "../UI/Button";

interface DropdownItem {
  title: string;
  href: string;
}

interface MobileSection {
  title: string;
  items: DropdownItem[];
}

const sections: MobileSection[] = [
  {
    title: "Products",
    items: [
      {
        title: "SBOM Management",
        href: "/sbom",
      },
      {
        title: "CBOM Management",
        href: "/cbom",
      },
      {
        title: "Vulnerability Intelligence",
        href: "/vulnerabilities",
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        title: "Supply Chain Security",
        href: "/solutions/supply-chain",
      },
      {
        title: "Compliance",
        href: "/solutions/compliance",
      },
      {
        title: "Cryptographic Agility",
        href: "/solutions/crypto-agility",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Documentation",
        href: "/docs",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Case Studies",
        href: "/case-studies",
      },
    ],
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpanded((prev) => (prev === title ? null : title));
  };

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden rounded-lg p-2 text-white transition hover:bg-white/10"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[320px] flex-col border-l border-white/10 bg-slate-950 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 p-6">
                <h2 className="text-lg font-semibold text-white">
                  Menu
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-white transition hover:bg-white/10"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto px-6 py-6">

                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-white transition hover:bg-white/5"
                >
                  Home
                </Link>

                {sections.map((section) => (
                  <div
                    key={section.title}
                    className="mt-3"
                  >
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-white transition hover:bg-white/5"
                    >
                      {section.title}

                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          expanded === section.title
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {expanded === section.title && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="ml-3 mt-2 flex flex-col gap-1 border-l border-white/10 pl-4">
                            {section.items.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="rounded-lg px-2 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <Link
                  href="/pricing"
                  onClick={() => setOpen(false)}
                  className="mt-3 block rounded-xl px-3 py-3 text-white transition hover:bg-white/5"
                >
                  Pricing
                </Link>

                <Link
                  href="/company"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-white transition hover:bg-white/5"
                >
                  Company
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-white transition hover:bg-white/5"
                >
                  Contact
                </Link>
              </div>

              {/* Footer */}
              <div className="border-t border-white/10 p-6">
                <Button className="h-12 w-full">
                  Book a Demo
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
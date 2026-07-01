"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Container from "../../UI/Container"
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import CTAButton from "./CTAButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <Container className="pt-5">
        <div
          className={`relative flex h-20 items-center justify-between rounded-2xl border transition-all duration-500 ${
            scrolled
              ? `
                border-white/10
                bg-[#0B0B14]/80
                backdrop-blur-2xl
                shadow-[0_10px_50px_rgba(0,0,0,0.45)]
              `
              : `
                border-transparent
                bg-transparent
              `
          }`}
        >
          {/* Background Glow */}
          <div
            className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-600/15 blur-3xl" />
            <div className="absolute bottom-0 right-20 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-3xl" />
          </div>

          {/* Left */}
          <div className="relative z-10 flex items-center">
            <Logo />
          </div>

          {/* Center */}
          <div className="relative z-10 hidden lg:flex">
            <DesktopMenu />
          </div>

          {/* Right */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="hidden lg:block">
              <CTAButton />
            </div>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
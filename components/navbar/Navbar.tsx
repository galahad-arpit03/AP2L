"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Container from "../UI/Container";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import CTAButton from "./CTAButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <Container>
        <div
          className={`
            flex
            h-20
            items-center
            justify-between
            rounded-2xl
            border
            transition-all
            duration-300

            ${
              scrolled
                ? "border-white/10 bg-slate-950/75 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                : "border-transparent bg-transparent"
            }
          `}
        >
          {/* Left */}
          <Logo />

          {/* Center */}
          <DesktopMenu />

          {/* Right */}
          <div className="flex items-center gap-3">
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
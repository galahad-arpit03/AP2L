"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Acme Corp" },
  { name: "Quantum" },
  { name: "Echo Valley" },
  { name: "Nebula Systems" },
  { name: "Zenith" },
  { name: "AeroDynamics" },
  { name: "Pinnacle" },
  { name: "Lumina" },
];

export default function TrustedPartners() {
  // Duplicate array to create a seamless infinite loop
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-10 md:py-14">
      <div className="relative mx-auto max-w-7xl px-4 text-center z-10">
        <p className="mb-8 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Trusted by Innovative Teams Worldwide
        </p>

        {/* Marquee Container */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          
          {/* Left/Right Fade Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />

          {/* Scrolling Content */}
          <div className="flex w-[200%] overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex w-full items-center justify-around gap-12 sm:gap-24"
            >
              {marqueePartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center whitespace-nowrap"
                >
                  <h3 className="font-urbanist text-2xl font-bold tracking-tight text-slate-400/80 transition-all duration-300 hover:text-slate-900 hover:scale-105 md:text-3xl">
                    {partner.name}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

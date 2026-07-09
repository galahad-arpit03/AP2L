"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function QABenefits() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500 py-16 md:py-24">
      {/* Background Decorations (subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-violet-500/5 dark:bg-violet-500/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-fuchsia-500/4 dark:bg-fuchsia-500/6 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-urbanist text-4xl md:text-5xl font-medium tracking-tight text-slate-900 dark:text-white">
            Benefits of AI-Powered Testing
          </h2>
          <p className="mt-4 font-inter text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real results from enterprise QA teams using AP2L's AI-powered testing platform.
          </p>
        </motion.div>

        {/* Full-Width Image Container (within margins) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-700/60 shadow-2xl shadow-violet-500/10"
        >
          <Image
            src="/images/solutions/QA/benefits.png" // Replace with your actual image path
            alt="Benefits of AI-Powered Testing - AP2L Platform"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
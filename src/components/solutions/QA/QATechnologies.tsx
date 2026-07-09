"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function QATechnologies() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header – Centered */}
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Compatible with Your Stack
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              cliQTest works with the technologies you already use. No migration required.
            </p>
          </motion.div>
        </div>

        {/* Full‑width Image – fills the container width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full"
        >
          <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-900">
            {/* Light mode image */}
            <Image
              src="/images/solutions/QA/technologies.png"
              alt="Technologies compatible with cliQTest"
              fill
              className="object-cover dark:hidden"
              priority
            />
            {/* Dark mode image */}
            <Image
              src="/images/solutions/QA/technologies_dark.png"
              alt="Technologies compatible with cliQTest"
              fill
              className="object-cover hidden dark:block"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
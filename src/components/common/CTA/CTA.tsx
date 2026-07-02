"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  headline?: React.ReactNode;
  description?: React.ReactNode;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTA({
  headline = "Ready to Transform Your Infrastructure?",
  description = "Book a Personalized Demo to see how our platforms can automate your workflows, map vulnerabilities, and ensure enterprise-grade compliance.",
  primaryButtonText = "Book Demo",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View Docs",
  secondaryButtonLink = "/resources/documentation",
}: CTAProps) {
  return (
    <section className="relative w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="relative mx-auto max-w-6xl z-10">

        {/* Rounded Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex flex-col items-center text-center px-6 py-12 md:py-16 md:px-12 rounded-md overflow-hidden border border-slate-900/5 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-xl shadow-slate-200/20 dark:shadow-none"
        >
          {/* Dynamic Background Elements for that Soft Gradient look */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Soft background color base */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-slate-50/20 to-fuchsia-50/30 dark:from-violet-900/10 dark:via-slate-900 dark:to-fuchsia-900/10" />

            {/* Blurry blobs */}
            <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-200/40 dark:bg-violet-900/20 rounded-full blur-[100px] opacity-70" />
            <div className="absolute bottom-0 right-1/4 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-[100px] opacity-70" />
          </div>

          <h2 className="relative z-10 font-urbanist text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 dark:text-white mb-4 max-w-4xl leading-tight">
            {headline}
          </h2>

          <p className="relative z-10 font-inter text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
            {description}
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            {/* Primary Button */}
            <Link
              href={primaryButtonLink}
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-slate-800 dark:bg-white px-8 py-3.5 font-inter text-base font-medium text-white dark:text-slate-900 transition-all hover:bg-slate-700 dark:hover:bg-slate-100 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              {primaryButtonText}
            </Link>

            {/* Secondary Button */}
            <Link
              href={secondaryButtonLink}
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-transparent px-8 py-3.5 font-inter text-base font-medium text-slate-900 dark:text-white transition-all hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-600"
            >
              {secondaryButtonText}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

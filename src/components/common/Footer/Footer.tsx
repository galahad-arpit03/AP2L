"use client";

import Link from "next/link";
import Image from "next/image";


import Container from "../Container/Container";
import FooterColumn from "./FooterColumn";
import FooterBottom from "./FooterBottom";
import { footerSections } from "./footerData";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-900/10 bg-white">
      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[160px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_60%)]" />
      </div>

      <Container className="relative z-10">

        {/* ================= Footer Grid ================= */}

        <div className="grid gap-16 border-t border-slate-900/10 py-20 lg:grid-cols-[2fr_repeat(4,1fr)]">

          {/* Left */}

          <div>

            <Link
              href="/"
              className="inline-flex items-center gap-4"
            >
              <Image
                src="/logo/logo.png"
                alt="AP2L"
                width={55}
                height={55}
                priority
                className="rounded-full"
              />

              <div>

                <h3 className="text-2xl font-bold text-slate-900">
                  AP2L
                </h3>

                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500 mt-1">
                  ApMoSys Products
                </p>

              </div>

            </Link>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-slate-600">
              AP2L helps enterprises accelerate digital transformation
              through Artificial Intelligence, Cloud Engineering,
              Automation, Cyber Security, and next-generation software
              solutions.
            </p>



          </div>

          {/* Navigation */}

          {footerSections.map((section) => (
            <FooterColumn
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}

        </div>

        {/* Bottom */}

        <div className="pb-8">
          <FooterBottom />
        </div>

      </Container>
    </footer>
  );
}
"use client";

import ITHero from "@/src/components/solutions/IT-Support/Ithero";
import CTA from "@/src/components/common/CTA/CTA";
import ThemeBuilder from "@/src/components/common/ThemeBuilder/ThemeBuilder";
import { useThemeConfig } from "@/src/context/ThemeConfigContext";

const COMPONENTS = [
  { id: "it_hero", label: "IT Support Hero" },
  { id: "cta", label: "Call to Action" },
];

export default function ITSupportPage() {
  const { componentThemes } = useThemeConfig();

  const renderWithTheme = (
    id: string,
    Component: React.ReactNode
  ) => {
    const theme = componentThemes[id] || "global";

    if (theme === "global") {
      return Component;
    }

    if (theme === "dark") {
      return <div className="dark">{Component}</div>;
    }

    if (theme === "light") {
      return <div className="light">{Component}</div>;
    }

    return Component;
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-50 min-h-screen flex flex-col transition-colors duration-500">
      <ThemeBuilder components={COMPONENTS} />

      <main className="flex-1 w-full flex flex-col relative z-0">
        {renderWithTheme(
          "it_hero",
          <div className="lg:p-2">
            <ITHero />
          </div>
        )}

        {renderWithTheme(
          "cta",
          <CTA
            headline="Modernize Your IT Support with AI"
            description="Transform service delivery, automate repetitive workflows, accelerate incident resolution, and provide exceptional support experiences with AP2L's intelligent IT operations platform."
            primaryButtonText="Book a Demo"
            primaryButtonLink="/contact"
            secondaryButtonText="Talk to Our Experts"
            secondaryButtonLink="/contact"
          />
        )}
      </main>
    </div>
  );
}
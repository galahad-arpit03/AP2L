import Hero from "@/src/components/Landing/Hero/Hero";
import TrustedPartners from "@/src/components/Landing/TrustedPartners/TrustedPartners";
import PlatformOverview from "@/src/components/Landing/PlatformOverview/PlatformOverview";
import KeySolutions from "@/src/components/Landing/KeySolutions/KeySolutions";
import CoreFeatures from "@/src/components/Landing/CoreFeatures/CoreFeatures";
import ROIMetrics from "@/src/components/Landing/ROIMetrics/ROIMetrics";
import Testimonials from "@/src/components/Landing/Testimonials/Testimonials";
import CTA from "@/src/components/Landing/CTA/CTA";

export default function Home() {
  return (
    <div className="bg-slate-50 dark:bg-slate-50 min-h-screen flex flex-col transition-colors duration-500">
      <main className="flex-1 w-full flex flex-col">
        <div className="lg:pt-2 lg:px-2">
          <Hero />
        </div>
        <TrustedPartners />
        <PlatformOverview />
        <KeySolutions />
        <CoreFeatures />
        <ROIMetrics />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}
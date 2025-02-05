import CtaSection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import StatisticSection from "@/components/StatisticSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div>
      <div className="grid-background"/>
        <Hero />
        <FeatureSection />
        <StatisticSection />
        <ServiceSection />
        <TestimonialSection />
        <FaqSection />
        <CtaSection />
    </div>
  );
}

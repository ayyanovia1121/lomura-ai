import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import StatisticSection from "@/components/StatisticSection";

export default function Home() {
  return (
    <div>
      <div className="grid-background"/>
        <Hero />
        <FeatureSection />
        <StatisticSection />
        <ServiceSection />
    </div>
  );
}

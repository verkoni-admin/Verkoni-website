import ServicesHero from "./sections/ServicesHero";
import ServicesOverviewSection from "./sections/ServicesOverviewSection";
import ServiceDetailSection from "./sections/ServiceDetailSection";
import CapabilitiesSection from "./sections/CapabilitiesSection";
import WhyAndEngagementSection from "./sections/WhyAndEngagementSection";
import ServicesCTA from "./sections/ServicesCTA";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesOverviewSection />
      <ServiceDetailSection />
      <CapabilitiesSection />
      <WhyAndEngagementSection />
      <ServicesCTA />
    </>
  );
}

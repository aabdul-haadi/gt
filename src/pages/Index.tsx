import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ClientLogoWall } from "@/components/sections/ClientLogoWall";
import { Testimonials } from "@/components/sections/Testimonials";
import { FomoBanner } from "@/components/sections/FomoBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="Techcare General Trading L.L.C — ISO Certified UAE Trading Partner"
        description="ISO 9001:2015 certified Dubai-based trading company supplying construction, solar, food, safety, electrical and industrial products across the UAE."
      />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <ClientLogoWall />
      <Testimonials />
      <FomoBanner />
      <ContactSection />
    </>
  );
};

export default Index;

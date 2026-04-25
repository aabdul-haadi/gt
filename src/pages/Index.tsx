import React, { Suspense } from 'react';
import { SEO } from "@/components/SEO";
import { LoadingSpinner } from "@/components/layout/LoadingSpinner";

const Hero = React.lazy(() => import('@/components/sections/Hero').then(module => ({ default: module.Hero })))
const ServicesOverview = React.lazy(() => import('@/components/sections/ServicesOverview').then(module => ({ default: module.ServicesOverview })))
const WhyChooseUs = React.lazy(() => import('@/components/sections/WhyChooseUs').then(module => ({ default: module.WhyChooseUs })))
const ClientLogoWall = React.lazy(() => import('@/components/sections/ClientLogoWall').then(module => ({ default: module.ClientLogoWall })))
const Testimonials = React.lazy(() => import('@/components/sections/Testimonials').then(module => ({ default: module.Testimonials })))
const FomoBanner = React.lazy(() => import('@/components/sections/FomoBanner').then(module => ({ default: module.FomoBanner })))
const ContactSection = React.lazy(() => import('@/components/sections/ContactSection').then(module => ({ default: module.ContactSection })))

const Index = () => {
  return (
    <>
      <SEO
        title="Techcare General Trading L.L.C — ISO Certified UAE Trading Partner"
        description="ISO 9001:2015 certified Dubai-based trading company supplying construction, solar, food, safety, electrical and industrial products across the UAE."
      />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <ServicesOverview />
        <WhyChooseUs />
        <ClientLogoWall />
        <Testimonials />
        <FomoBanner />
        <ContactSection />
      </Suspense>
    </>
  );
};

export default Index;

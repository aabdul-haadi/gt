import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { ContactSection } from "@/components/sections/ContactSection";
import { company } from "@/data/company";
import { Clock, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => (
  <>
    <SEO
      title="Contact Techcare General Trading — Dubai, UAE"
      description="Reach Techcare General Trading at Office 308, Al Garhoud Star Building, Dubai. Phone, email, contact form and Google Map."
    />
    <Breadcrumbs items={[{ label: "Contact" }]} />

    <section className="bg-gradient-hero text-primary-foreground">
      <div className="container-page py-14 md:py-20">
        <span className="eyebrow text-accent-glow">Get in Touch</span>
        <h1 className="mt-3 text-4xl md:text-5xl text-primary-foreground">
          Send Your Inquiry — We Respond Within 24 Hours
        </h1>
        <p className="mt-4 max-w-2xl opacity-90 text-lg">
          Visit us in Al Garhoud, call our team or send a message — we’ll get back
          to you with pricing, availability and lead times.
        </p>
      </div>
    </section>

    <ContactSection />

    <section className="pb-16">
      <div className="container-page grid lg:grid-cols-[1fr_320px] gap-6 items-stretch">
        <div className="rounded-xl overflow-hidden border border-border shadow-card aspect-[16/9] lg:aspect-auto lg:min-h-[420px]">
          <iframe
            title="Techcare office on Google Maps"
            src={company.mapsEmbed}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <aside className="bg-card border border-border rounded-xl p-6 shadow-card">
          <h3 className="text-lg">Business Hours</h3>
          <div className="mt-3 inline-flex items-start gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mt-0.5 text-accent" />
            <span>{company.hours}<br />Friday – Saturday · Closed</span>
          </div>
          <h3 className="mt-6 text-lg">Follow Us</h3>
          <div className="mt-3 flex gap-2">
            {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="h-10 w-10 rounded-md bg-secondary text-primary hover:bg-accent hover:text-accent-foreground grid place-items-center transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  </>
);

export default Contact;

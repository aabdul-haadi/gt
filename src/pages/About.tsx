import { Link } from "react-router-dom";
import { Award, Target, Eye, Users, Globe2, Tag, Truck, Shield, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { QuoteDialog } from "@/components/QuoteDialog";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import ceo from "@/assets/ceo-portrait.jpg";
import banner from "@/assets/about-banner.jpg";

const principles = [
  { icon: Shield, title: "Integrity", text: "We do business with transparency and honesty in every transaction." },
  { icon: Award, title: "Quality", text: "ISO 9001:2015 standards applied across sourcing and delivery." },
  { icon: Users, title: "Client Focus", text: "We listen, adapt and structure solutions around client priorities." },
  { icon: Globe2, title: "Diversity", text: "Global supplier network for resilience and choice." },
  { icon: Tag, title: "Value", text: "Competitive pricing without compromising specification." },
];

const competencies = [
  { icon: Globe2, title: "Diversity of Sources" },
  { icon: Award, title: "Commitment to Quality" },
  { icon: Tag, title: "Competitive Pricing" },
  { icon: Truck, title: "Accurate Delivery" },
];

const About = () => (
  <>
    <SEO
      title="About Techcare General Trading — ISO Certified UAE Supplier"
      description="Founded in 2022 in Dubai, Techcare General Trading is an ISO 9001:2015 certified multi-sector supplier across the UAE."
    />
    <Breadcrumbs items={[{ label: "About Us" }]} />

    <section className="relative isolate overflow-hidden">
      <img src={banner} alt="Dubai skyline" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="relative container-page py-20 md:py-28 text-primary-foreground">
        <span className="eyebrow text-accent-glow">Our Story</span>
        <h1 className="mt-3 text-4xl md:text-5xl text-primary-foreground max-w-3xl">
          Built in Dubai. Trusted across the UAE.
        </h1>
        <p className="mt-4 max-w-2xl opacity-90 text-lg">
          Since {company.founded}, Techcare General Trading has grown into a trusted
          multi-sector supplier — combining global sourcing strength with Dubai-based
          delivery agility.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container-page grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <span className="eyebrow">Company Background</span>
          <h2 className="mt-3 text-3xl">A trading partner for the UAE’s growth sectors</h2>
          <div className="mt-5 space-y-4 text-muted-foreground">
            <p>
              Techcare General Trading L.L.C was founded in {company.founded} in
              Dubai with a clear mission: to give UAE-based contractors, hospitality
              operators, fleet managers and industrial buyers a single, reliable
              source for the materials and equipment that move their projects forward.
            </p>
            <p>
              From our office in Al Garhoud, we serve the Power, Industrial, Oil &
              Gas, Construction and Commercial sectors — supplying everything from
              cement and structural steel to solar panels, lithium batteries, food
              products, safety PPE, electrical fit-out, cabling and auto spare parts.
            </p>
            <p>
              Our ISO 9001:2015 certification is more than a badge — it’s the
              operating standard behind our supplier vetting, quality control,
              documentation and on-time delivery commitments.
            </p>
          </div>
        </div>
        <aside className="bg-secondary rounded-xl p-6 border border-border self-start">
          <Award className="h-10 w-10 text-accent" />
          <h3 className="mt-3 text-lg">ISO 9001:2015 Certified</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Internationally recognized quality management. Every order benefits
            from a documented, auditable process — from source vetting to final
            handover.
          </p>
        </aside>
      </div>
    </section>

    {/* CEO message */}
    <section className="section bg-surface">
      <div className="container-page grid lg:grid-cols-[320px_1fr] gap-10 items-start">
        <div>
          <img
            src={ceo}
            alt="Ahmed Ali Mir, Manager"
            width={800}
            height={960}
            loading="lazy"
            className="rounded-xl shadow-elevated w-full object-cover aspect-[4/5]"
          />
          <div className="mt-4">
            <div className="font-display font-bold text-primary text-lg">Ahmed Ali Mir</div>
            <div className="text-sm text-muted-foreground">Manager, Techcare General Trading</div>
          </div>
        </div>
        <div>
          <span className="eyebrow">CEO Message</span>
          <h2 className="mt-3 text-3xl">A note from our leadership</h2>
          <div className="mt-5 space-y-4 text-muted-foreground">
            <p>
              “At Techcare, we believe a trading company is only as strong as the
              trust it earns over time. From the day we opened our doors in 2022,
              our promise has been simple — quality you can audit, prices that
              respect your bottom line, and delivery you can plan around.”
            </p>
            <p>
              “As we grow alongside the UAE’s ambitious construction, energy and
              hospitality sectors, that promise will not change. We look forward
              to partnering with you.”
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission / Vision */}
    <section className="section">
      <div className="container-page grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-8 border border-border card-hover">
          <Target className="h-10 w-10 text-accent" />
          <h3 className="mt-4 text-2xl">Our Mission</h3>
          <p className="mt-3 text-muted-foreground">
            To be the most reliable trading partner in the UAE — supplying
            quality-assured products across multiple sectors with the speed,
            transparency and pricing our clients expect.
          </p>
        </div>
        <div className="bg-card rounded-xl p-8 border border-border card-hover">
          <Eye className="h-10 w-10 text-accent" />
          <h3 className="mt-4 text-2xl">Our Vision</h3>
          <p className="mt-3 text-muted-foreground">
            To set the regional benchmark for multi-category trading by combining
            global sourcing depth with Dubai-based service excellence.
          </p>
        </div>
      </div>
    </section>

    {/* Guiding principles */}
    <section className="section bg-surface">
      <div className="container-page">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Guiding Principles</span>
          <h2 className="mt-3 text-3xl">The values behind every shipment</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {principles.map((p) => {
            const I = p.icon;
            return (
              <div key={p.title} className="bg-card rounded-xl p-5 border border-border card-hover">
                <I className="h-8 w-8 text-accent" />
                <h4 className="mt-3 text-base font-display font-bold text-primary">{p.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Key competencies */}
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Key Competencies</span>
          <h2 className="mt-3 text-3xl">Where we deliver real value</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {competencies.map((c) => {
            const I = c.icon;
            return (
              <div key={c.title} className="bg-gradient-hero text-primary-foreground rounded-xl p-6">
                <I className="h-8 w-8 text-accent-glow" />
                <h4 className="mt-3 text-lg font-display font-bold text-primary-foreground">{c.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="section bg-surface">
      <div className="container-page text-center max-w-2xl mx-auto">
        <h2 className="text-3xl">Work With Us</h2>
        <p className="mt-3 text-muted-foreground">
          Tell us about your project. Our procurement specialists are ready to scope,
          price and deliver.
        </p>
        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          <QuoteDialog>
            <Button size="lg" className="bg-accent hover:bg-accent-glow text-accent-foreground font-semibold">
              Contact Our Team <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </QuoteDialog>
          <Button asChild size="lg" variant="outline">
            <Link to="/products">Explore Products</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default About;

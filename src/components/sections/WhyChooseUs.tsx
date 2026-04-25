import { Globe, Award, Tag, Truck } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Diversity of Sources",
    desc: "Global supplier network ensures availability, choice and continuity for every project.",
  },
  {
    icon: Award,
    title: "ISO Certified Quality",
    desc: "ISO 9001:2015 quality management — every shipment held to internationally audited standards.",
  },
  {
    icon: Tag,
    title: "Competitive Pricing",
    desc: "Direct sourcing relationships and bulk leverage translate into priority pricing for our clients.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    desc: "UAE-based logistics with predictable lead times — keeping your project schedule intact.",
  },
];

export const WhyChooseUs = () => (
  <section className="section">
    <div className="container-page">
      <div className="max-w-2xl mb-12">
        <span className="eyebrow">Why Techcare</span>
        <h2 className="mt-3 text-3xl md:text-4xl">
          Procurement partners trust us — and so will you
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="bg-card rounded-xl p-6 border border-border card-hover"
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-accent text-accent-foreground grid place-items-center shadow-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Real Time Tracking",
    desc: "Global supplier network ensures availability, choice and continuity for every project.",
    image: "src/assets/home-page/why-1.webp",
  },
  {
    title: "Proven Reliability",
    desc: "ISO 9001:2015 quality management — every shipment held to internationally audited standards.",
    image: "src/assets/home-page/why-2.webp",
  },
  {
    title: "End to End Service",
    desc: "Direct sourcing relationships and bulk leverage translate into priority pricing for our clients.",
    image: "src/assets/home-page/why-3.webp",
  },
];

export const WhyChooseUs = () => (
  <section className="py-16 md:py-24 bg-muted/40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 md:mb-14">
        <div className="max-w-2xl">
          <span className="eyebrow">
            Why Choose Us
          </span>
          <h2 className="heading-2 text-3xl sm:text-4xl text-slate-900">
            Why We Move Better
          </h2>
        </div>
        <Link to="/contact" className="shrink-0">
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2.5 rounded-md font-medium text-sm">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[minmax(180px,auto)]">
        
        {/* Card 1: Real Time Tracking (Top Left) */}
        <div className="bg-card rounded-xl p-6 md:p-8 flex flex-col justify-center shadow-sm border border-border">
          <h3 className="text-2xl md:text-[28px] font-bold text-card-foreground leading-tight">
            {features[0].title.split(" ").map((word, i, arr) => (
              <span key={i}>
                {word}
                {i === 0 && <br />}
              </span>
            ))}
          </h3>
          <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            {features[0].desc}
          </p>
        </div>

        {/* Image 1: Workers with containers (Top Middle) */}
        <div 
          className="rounded-xl bg-cover bg-center min-h-[240px] md:min-h-0"
          style={{ backgroundImage: `url(${features[0].image})` }}
        />

        {/* Card 2 + Image 2: Proven Reliability overlay (Top Right / Spans 2 rows) */}
        <div className="md:row-span-2 relative rounded-xl overflow-hidden min-h-[300px] md:min-h-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${features[1].image})` }}
          />
          {/* Overlay Text Card */}
          <div className="relative bg-card rounded-xl p-6 md:p-8 m-4 md:m-5 shadow-sm max-w-[280px] border border-border">
            <h3 className="text-2xl md:text-[28px] font-bold text-card-foreground leading-tight">
              {features[1].title.split(" ").map((word, i, arr) => (
                <span key={i}>
                  {word}
                  {i === 0 && <br />}
                </span>
              ))}
            </h3>
            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              {features[1].desc}
            </p>
          </div>
        </div>

        {/* Image 3: Two workers (Bottom Left) */}
        <div 
          className="rounded-xl bg-cover bg-center min-h-[240px] md:min-h-0"
          style={{ backgroundImage: `url(${features[2].image})` }}
        />

        {/* Card 3: End to End Service (Bottom Middle - Secondary) */}
        <div className="bg-secondary rounded-xl p-6 md:p-8 flex flex-col justify-center shadow-sm">
          <h3 className="text-2xl md:text-[28px] font-bold text-secondary-foreground leading-tight">
            {features[2].title.split(" ").map((word, i, arr) => (
              <span key={i}>
                {word}
                {i === 0 && <br />}
              </span>
            ))}
          </h3>
          <p className="mt-4 text-secondary-foreground/90 text-sm md:text-base leading-relaxed">
            {features[2].desc}
          </p>
        </div>

      </div>
    </div>
  </section>
);

import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/QuoteDialog";
import heroImg from "@/assets/hero-warehouse.jpg";

export const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Techcare warehouse with construction materials and solar panels"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />

      <div className="relative container-page py-24 md:py-36 lg:py-44">
        <div className="max-w-2xl text-primary-foreground">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider shadow-accent">
            <ShieldCheck className="h-3.5 w-3.5" />
            ISO 9001:2015 · Limited Stock Available
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.05]">
            Your Trusted Trading Partner in the UAE
          </h1>
          <p className="mt-5 text-lg md:text-xl opacity-95 max-w-xl">
            ISO-certified, multi-sector supply across Construction, Solar, Food,
            Safety, Electrical, Cables, Auto Parts and more — delivered with
            precision from Dubai.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <QuoteDialog>
              <Button size="lg" className="bg-accent hover:bg-accent-glow text-accent-foreground font-semibold shadow-accent">
                Request a Quote Now
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </QuoteDialog>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white/70 text-white hover:bg-white hover:text-primary font-semibold"
            >
              <Link to="/products">Explore Our Products</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {[
              { k: "13+", v: "Product Categories" },
              { k: "5", v: "Sectors Served" },
              { k: "24h", v: "Quote Response" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-extrabold text-accent-glow">{s.k}</div>
                <div className="opacity-80">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOMO ribbon */}
      <div className="relative bg-accent text-accent-foreground">
        <div className="container-page py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm font-semibold">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Get Priority Bulk Pricing — Limited Appointment Slots This Month.
          </span>
          <QuoteDialog title="Book a Consultation">
            <button className="underline underline-offset-4 hover:opacity-90">
              Book Now →
            </button>
          </QuoteDialog>
        </div>
      </div>
    </section>
  );
};

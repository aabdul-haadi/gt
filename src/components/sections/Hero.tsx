import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/QuoteDialog";
import heroImg from "@/assets/hero-warehouse.jpg";

export const Hero = () => {
  return (
    <section className="relative isolate bg-slate-900">
      <div>
        <img
          src={heroImg}
          alt="Warehouse with construction materials and steel supplies in Dubai, illustrating a general trading company's inventory."
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />

      {/* Slightly reduced padding for balanced height */}
      <div className="relative container-page pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-44 md:pb-28 lg:pt-48 lg:pb-32 text-center min-h-[85vh] flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Dubai's Trusted General Trading Partner — Steel, MEP, Construction & More
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            ISO 9001:2015 certified · Serving UAE since 2022 · Oil, Commercial & Industrial sectors
          </p>

          {/* CTAs - Mobile: single row compact with reduced width, Desktop: original layout */}
          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            {/* Mobile version - single row with reduced width buttons */}
            <div className="flex w-auto justify-center gap-2 sm:hidden">
              <QuoteDialog>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg text-sm px-4 py-2 h-auto">
                  Request Quote
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </QuoteDialog>
              <Button
                asChild
                className="bg-white text-slate-900 hover:bg-white/90 font-semibold text-sm px-4 py-2 h-auto"
              >
                <Link to="/products">View Products</Link>
              </Button>
            </div>

            {/* Desktop version - original layout (hidden on mobile) */}
            <div className="hidden sm:flex sm:flex-row sm:gap-4">
              <QuoteDialog>
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </QuoteDialog>
              <Button
                asChild
                className="w-full sm:w-auto bg-white text-slate-900 hover:bg-white/90 font-semibold"
              >
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>
          </div>

          {/* Trust indicators - exactly as desktop, visible on all screens */}
          <div className="mt-9 text-xs font-medium text-slate-400">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <span>ISO 9001:2015 certified</span>
              <span className="opacity-50">·</span>
              <span>3+ years in UAE</span>
              <span className="opacity-50">·</span>
              <span>15+ client brands</span>
              <span className="opacity-50">·</span>
              <span>Dubai-based</span>
              <span className="opacity-50">·</span>
              <span>International sourcing</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* FOMO ribbon - Mobile: scrolling text with fixed button | Desktop: static side by side */}
      <div className="relative bg-accent text-accent-foreground">
        {/* Mobile view (scrolling) */}
        <div className="md:hidden relative overflow-hidden">
          <div className="flex items-center justify-between gap-2 py-3 px-4">
            <div className="flex-1 min-w-0 overflow-hidden">
              <div className="whitespace-nowrap animate-marquee inline-flex">
                <span className="inline-flex items-center gap-1.5 font-semibold text-xs sm:text-sm">
                  <Sparkles className="h-3 w-3 flex-shrink-0" />
                  <span>Get Priority Bulk Pricing — Limited Appointment Slots This Month.</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold ml-6 text-xs sm:text-sm">
                  <Sparkles className="h-3 w-3 flex-shrink-0" />
                  <span>Get Priority Bulk Pricing — Limited Appointment Slots This Month.</span>
                </span>
              </div>
            </div>
            <QuoteDialog title="Book a Consultation">
              <button className="flex-shrink-0 underline underline-offset-4 hover:opacity-90 font-semibold whitespace-nowrap text-xs sm:text-sm">
                Book Now →
              </button>
            </QuoteDialog>
          </div>
        </div>

        {/* Desktop view (static, original layout) */}
        <div className="hidden md:block">
          <div className="container-page flex flex-col items-center justify-between gap-2 py-3 text-center text-sm font-semibold sm:flex-row sm:text-left">
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
      </div>

      {/* Add keyframes for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
      `}</style>
    </section>
  );
};
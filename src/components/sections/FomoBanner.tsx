import { ArrowRight } from "lucide-react";
import { QuoteDialog } from "@/components/QuoteDialog";
import { Button } from "@/components/ui/button";

export const FomoBanner = () => (
  <section className="relative isolate bg-slate-900 text-white">
    {/* Background Image with Overlay */}
    <img
      src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80"
      alt="Consultation background showing construction materials"
      className="absolute inset-0 h-full w-full object-cover opacity-20"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/70 to-transparent" />

    {/* Content */}
    <div className="relative container-page py-16 md:py-24 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Limited Consultation Slots Available
        </h2>
        <p className="mt-4 text-lg md:text-xl text-slate-300">
          Secure priority pricing on bulk orders. Our specialists are ready to assist with your project needs.
        </p>
        <div className="mt-8">
          <QuoteDialog title="Book a Consultation">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg">
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </QuoteDialog>
        </div>
      </div>
    </div>
  </section>
);

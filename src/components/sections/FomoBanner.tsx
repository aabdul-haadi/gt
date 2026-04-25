import { Clock, ArrowRight } from "lucide-react";
import { QuoteDialog } from "@/components/QuoteDialog";
import { Button } from "@/components/ui/button";

export const FomoBanner = () => (
  <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
    <div className="container-page py-14 md:py-16 grid md:grid-cols-[1fr_auto] gap-6 items-center">
      <div>
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-glow">
          <Clock className="h-3.5 w-3.5" /> Limited Availability
        </span>
        <h2 className="mt-2 text-2xl md:text-3xl text-primary-foreground">
          Book a Consultation Today — Limited Appointment Slots Available
        </h2>
        <p className="mt-2 opacity-90 max-w-2xl">
          Get priority pricing on bulk orders. Our procurement specialists will
          structure the right package for your project.
        </p>
      </div>
      <QuoteDialog title="Book a Consultation">
        <Button size="lg" className="bg-accent hover:bg-accent-glow text-accent-foreground font-semibold shadow-accent">
          Book Now <ArrowRight className="ml-1.5 h-4 w-4" />
        </Button>
      </QuoteDialog>
    </div>
  </section>
);

import { Quote } from "lucide-react";
import { testimonials } from "@/data/clients";
import { QuoteDialog } from "@/components/QuoteDialog";
import { Button } from "@/components/ui/button";

export const Testimonials = () => (
  <section className="pt-12 md:pt-20">
    <div className="container-page">
      <div className="max-w-2xl mb-12">
        <span className="eyebrow">What Clients Say</span>
        <h2 className="mt-3 text-3xl md:text-4xl text-slate-900">Voices from the field</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="bg-card rounded-xl p-6 border border-border card-hover flex flex-col"
          >
            <Quote className="h-7 w-7 text-accent" />
            <blockquote className="mt-3 text-foreground/90 flex-1">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 pt-5 border-t border-border">
              <div className="font-semibold text-primary">{t.name}</div>
              <div className="text-xs text-muted-foreground">
                {t.role} · {t.company}
              </div>
              <div className="mt-1 inline-block text-[10px] font-bold uppercase tracking-wider text-accent">
                {t.sector}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="text-center mt-10 pb-12 md:pb-20">
        <QuoteDialog>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Join Trusted UAE Companies
          </Button>
        </QuoteDialog>
      </div>
    </div>
  </section>
);

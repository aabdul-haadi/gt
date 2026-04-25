import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { clientGroups, brandPartners } from "@/data/clients";
import { QuoteDialog } from "@/components/QuoteDialog";
import { Button } from "@/components/ui/button";

const Clients = () => (
  <>
    <SEO
      title="Our Clients — Techcare General Trading"
      description="Trusted by hotels, EPC contractors, oil & gas operators and institutions across the UAE."
    />
    <Breadcrumbs items={[{ label: "Clients" }]} />

    <section className="bg-gradient-hero text-primary-foreground">
      <div className="container-page pt-16 md:pt-20 pb-12 md:pb-16">
        <span className="eyebrow text-accent-glow">Our Clientele</span>
        <h1 className="mt-3 text-4xl md:text-5xl text-primary-foreground">
          Trusted by UAE’s Leading Organizations
        </h1>
        <p className="mt-4 max-w-2xl opacity-90 text-lg">
          A snapshot of the hospitality groups, EPC contractors and institutions
          that source from Techcare.
        </p>
      </div>
    </section>

    {clientGroups.map((g) => (
      <section key={g.sector} className="section even:bg-surface">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl">{g.sector}</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {g.clients.map((c) => (
              <div
                key={c.name}
                className="bg-card rounded-lg border border-border h-28 grid place-items-center text-center px-3 card-hover"
              >
                <span className="font-display font-bold text-primary text-sm leading-tight">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    ))}

    <section className="section">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl">Brand Partners</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          We supply, distribute or partner with leading global and regional brands.
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {brandPartners.map((b) => (
            <div
              key={b.name}
              className="bg-secondary rounded-lg border border-border p-4 text-center card-hover"
            >
              <div className="font-display font-bold text-primary">{b.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{b.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section bg-gradient-hero text-primary-foreground">
      <div className="container-page text-center max-w-2xl mx-auto">
        <h2 className="text-3xl text-primary-foreground">Become Our Next Success Story</h2>
        <p className="mt-3 opacity-90">
          Whether you’re an EPC contractor, hotel group or industrial operator — we’d
          love to be your sourcing partner.
        </p>
        <div className="mt-6">
          <QuoteDialog>
            <Button size="lg" className="bg-accent hover:bg-accent-glow text-accent-foreground font-semibold">
              Start a Conversation
            </Button>
          </QuoteDialog>
        </div>
      </div>
    </section>
  </>
);

export default Clients;

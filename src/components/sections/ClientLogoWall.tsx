import { clientGroups } from "@/data/clients";

export const ClientLogoWall = () => {
  const all = clientGroups.flatMap((g) => g.clients);
  return (
    <section className="section bg-surface">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">Our Clients</span>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Trusted by UAE’s Leading Organizations
          </h2>
          <p className="mt-3 text-muted-foreground">
            From global hospitality groups to top-tier EPC contractors, our partners
            rely on Techcare for quality and consistency.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {all.map((c) => (
            <div
              key={c.name}
              className="bg-card rounded-lg border border-border h-24 grid place-items-center text-center px-3 card-hover"
            >
              <span className="font-display font-bold text-primary text-sm leading-tight">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

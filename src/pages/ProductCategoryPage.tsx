import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { productCategories, getCategory } from "@/data/products";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/QuoteDialog";

const ProductCategoryPage = () => {
  const { slug = "" } = useParams();
  const cat = getCategory(slug);
  if (!cat) return <Navigate to="/products" replace />;
  const Icon = cat.icon;
  const related = productCategories.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${cat.name} — Techcare General Trading`}
        description={cat.description}
      />
      <Breadcrumbs
        items={[
          { label: "Products", to: "/products" },
          { label: cat.name },
        ]}
      />

      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container-page py-14 md:py-20 grid md:grid-cols-[auto_1fr] gap-6 items-center">
          <div className="h-20 w-20 rounded-xl bg-accent text-accent-foreground grid place-items-center shadow-accent">
            <Icon className="h-10 w-10" />
          </div>
          <div>
            <span className="eyebrow text-accent-glow">{cat.sector}</span>
            <h1 className="mt-2 text-3xl md:text-5xl text-primary-foreground">{cat.name}</h1>
            <p className="mt-3 max-w-2xl opacity-90">{cat.description}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid lg:grid-cols-[1fr_320px] gap-10">
          <div>
            <h2 className="text-2xl">Products in this Category</h2>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="bg-card border border-border rounded-lg p-4 flex items-start gap-3 card-hover"
                >
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 bg-secondary rounded-xl p-6">
              <h3 className="text-lg">Why source this from Techcare?</h3>
              <ul className="mt-4 grid sm:grid-cols-3 gap-3">
                {cat.highlights.map((h) => (
                  <li key={h} className="text-sm font-semibold text-primary inline-flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" /> {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky quote sidebar */}
          <aside className="lg:sticky lg:top-28 self-start bg-card border border-border rounded-xl p-6 shadow-card">
            <span className="eyebrow">Get Pricing</span>
            <h3 className="mt-2 text-xl">Request a Quote for {cat.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your specifications — we’ll respond within 24 hours.
            </p>
            <QuoteDialog defaultCategory={cat.name} title={`Quote — ${cat.name}`}>
              <Button className="mt-5 w-full bg-accent hover:bg-accent-glow text-accent-foreground font-semibold">
                Request a Quote <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </QuoteDialog>
          </aside>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <h2 className="text-2xl mb-6">Related Categories</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((r) => {
              const RIcon = r.icon;
              return (
                <Link
                  key={r.slug}
                  to={`/products/${r.slug}`}
                  className="bg-card border border-border rounded-xl p-5 card-hover flex items-start gap-4"
                >
                  <div className="h-11 w-11 rounded-md bg-secondary text-primary grid place-items-center">
                    <RIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-primary">{r.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{r.short}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile sticky bottom CTA */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background border-t border-border p-3 shadow-elevated">
        <QuoteDialog defaultCategory={cat.name} title={`Quote — ${cat.name}`}>
          <Button className="w-full bg-accent hover:bg-accent-glow text-accent-foreground font-semibold">
            Request a Quote for This Category
          </Button>
        </QuoteDialog>
      </div>
    </>
  );
};

export default ProductCategoryPage;

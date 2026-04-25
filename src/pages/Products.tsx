import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { FomoBanner } from "@/components/sections/FomoBanner";

const Products = () => (
  <>
    <SEO
      title="Products & Services — Techcare General Trading"
      description="Explore Techcare's full catalogue across 13 categories — construction, solar, food, safety, electrical, cables, auto parts and more."
    />
    <Breadcrumbs items={[{ label: "Products & Services" }]} />

    <section className="bg-gradient-hero text-primary-foreground">
      <div className="container-page py-16 md:py-20">
        <span className="eyebrow text-accent-glow">Our Catalogue</span>
        <h1 className="mt-3 text-4xl md:text-5xl text-primary-foreground">
          Products & Services
        </h1>
        <p className="mt-4 max-w-2xl opacity-90 text-lg">
          13 product categories serving every major UAE sector. Click into any
          category for the full product list and request a quote.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {productCategories.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.slug}
              to={`/products/${c.slug}`}
              className="group bg-card rounded-xl border border-border overflow-hidden card-hover flex flex-col"
            >
              <div className="bg-gradient-hero p-6">
                <div className="h-12 w-12 rounded-lg bg-accent text-accent-foreground grid place-items-center shadow-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-primary-foreground text-lg">{c.name}</h3>
                <p className="text-xs text-primary-foreground/80 mt-1">{c.sector}</p>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground flex-1">{c.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
                  View Details <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>

    <FomoBanner />
  </>
);

export default Products;

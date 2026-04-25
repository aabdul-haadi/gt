import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";

export const ServicesOverview = () => {
  const featured = productCategories.slice(0, 6);
  return (
    <section className="section bg-surface">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">What We Supply</span>
          <h2 className="mt-3 text-3xl md:text-4xl">
            A complete trading portfolio for the UAE’s most demanding sectors
          </h2>
          <p className="mt-4 text-muted-foreground">
            From construction-grade materials to renewable energy systems, our
            multi-category catalogue is built for project speed, scale and spec
            compliance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.slug}
                to={`/products/${c.slug}`}
                className="group bg-card rounded-xl p-6 border border-border card-hover flex flex-col"
              >
                <div className="h-12 w-12 rounded-lg bg-secondary text-primary grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg">{c.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground flex-1">
                  {c.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
                  View All Products <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent"
          >
            View all 13 categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

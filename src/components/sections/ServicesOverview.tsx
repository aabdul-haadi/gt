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
          <h2 className="mt-3 text-3xl md:text-4xl text-slate-900">
            A complete trading portfolio for the UAE’s most demanding sectors
          </h2>
          <p className="mt-4 text-muted-foreground">
            From construction-grade materials to renewable energy systems, our
            multi-category catalogue is built for project speed, scale and spec
            compliance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((c) => (
            <Link
              key={c.slug}
              to={`/products/${c.slug}`}
              className="relative group rounded-xl overflow-hidden shadow-card"
            >
              <img
                src={c.image} // Use the imported image from the data file
                alt={c.name}
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="text-white font-semibold text-lg">{c.name}</h3>
                <p className="text-white/80 text-sm mt-1">{c.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-2.5 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
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

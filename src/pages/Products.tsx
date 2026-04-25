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
      description="Explore Techcare\'s full catalogue across 13 categories — construction, solar, food, safety, electrical, cables, auto parts and more."
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
        {productCategories.map((c) => (
          <Link
            key={c.slug}
            to={`/products/${c.slug}`}
            className="relative group rounded-xl overflow-hidden shadow-card"
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="text-white font-semibold text-lg">{c.name}</h3>
              <p className="text-white/80 text-sm mt-1">{c.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
                View Details <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <FomoBanner />
  </>
);

export default Products;

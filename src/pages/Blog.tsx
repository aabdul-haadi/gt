import { Link } from "react-router-dom";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEO } from "@/components/SEO";

const posts = [
  {
    slug: "uae-construction-outlook-2026",
    title: "UAE Construction Outlook 2026: What Procurement Teams Should Plan For",
    category: "Industry News",
    date: "April 12, 2026",
    excerpt:
      "Megaproject pipeline, material trends and what it means for sourcing strategies across Dubai and Abu Dhabi.",
  },
  {
    slug: "solar-batteries-commercial",
    title: "Why Lithium Batteries Are Reshaping Commercial Solar in the Gulf",
    category: "Product Updates",
    date: "March 28, 2026",
    excerpt:
      "From rooftop installs to industrial micro-grids — a primer on choosing the right battery for your site.",
  },
  {
    slug: "ppe-oil-gas-best-practices",
    title: "PPE Sourcing for Oil & Gas: A Practical Buyer’s Guide",
    category: "Market Insights",
    date: "March 09, 2026",
    excerpt:
      "Certification standards, common pitfalls and how to structure long-term PPE contracts.",
  },
];

const Blog = () => (
  <>
    <SEO
      title="Blog & News — Techcare General Trading"
      description="Industry insights, product updates and company news from Techcare General Trading."
    />
    <Breadcrumbs items={[{ label: "Blog" }]} />

    <section className="bg-gradient-hero text-primary-foreground">
      <div className="container-page py-16 md:py-20">
        <span className="eyebrow text-accent-glow">News & Insights</span>
        <h1 className="mt-3 text-4xl md:text-5xl text-primary-foreground">
          Blog
        </h1>
        <p className="mt-4 max-w-2xl opacity-90 text-lg">
          Market commentary, product updates and procurement intelligence for the
          UAE’s busiest sectors.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container-page grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="group bg-card rounded-xl border border-border overflow-hidden card-hover flex flex-col"
          >
            <div className="aspect-[16/9] bg-gradient-hero" />
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Tag className="h-3 w-3" /> {p.category}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
              </div>
              <h3 className="mt-3 text-lg group-hover:text-accent transition-colors">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
                Read Article <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </>
);

export default Blog;

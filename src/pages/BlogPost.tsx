import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { QuoteDialog } from "@/components/QuoteDialog";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const title = slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  return (
    <>
      <SEO title={`${title} — Techcare Blog`} />
      <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: title }]} />
      <article className="section">
        <div className="container-page max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to all articles
          </Link>
          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> April 2026</span>
            <span>· Industry News</span>
          </div>
          <h1 className="mt-2 text-3xl md:text-4xl">{title}</h1>
          <div className="aspect-[16/8] my-8 rounded-xl bg-gradient-hero" />
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg text-muted-foreground">
              This article is a placeholder. Once the CMS is wired (Lovable Cloud
              recommended), real blog posts can be authored and published by the
              admin team directly.
            </p>
            <h2 className="text-2xl mt-8">Highlights</h2>
            <p>
              Techcare’s blog will cover industry news, product updates, company
              news and market insights — written for procurement, construction
              and operations leaders across the UAE.
            </p>
            <p>
              Want to be the first to read new posts? Get in touch and we’ll add
              you to our updates list.
            </p>
          </div>

          <div className="mt-10 bg-secondary rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div>
              <div className="font-display font-bold text-primary">Want this product? Get a quote now.</div>
              <div className="text-sm text-muted-foreground">Our team responds within 24 hours.</div>
            </div>
            <QuoteDialog>
              <Button className="bg-accent hover:bg-accent-glow text-accent-foreground font-semibold">
                Request a Quote
              </Button>
            </QuoteDialog>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEO } from "@/components/SEO";

const Terms = () => (
  <>
    <SEO title="Terms of Service — Techcare General Trading" />
    <Breadcrumbs items={[{ label: "Terms of Service" }]} />
    <section className="section">
      <div className="container-page max-w-3xl prose prose-lg">
        <h1>Terms of Service</h1>
        <p className="text-muted-foreground">
          By accessing this website, you agree to the following terms.
        </p>
        <h2>Use of the Site</h2>
        <p>Content is provided for informational purposes. Specifications, prices and availability may change without notice.</p>
        <h2>Inquiries & Quotations</h2>
        <p>Quotations issued by Techcare are subject to formal acceptance and payment terms agreed in writing.</p>
        <h2>Intellectual Property</h2>
        <p>All trademarks, logos and content remain the property of their respective owners.</p>
        <h2>Limitation of Liability</h2>
        <p>Techcare is not liable for indirect or consequential damages arising from use of this site.</p>
        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of the United Arab Emirates.</p>
      </div>
    </section>
  </>
);

export default Terms;

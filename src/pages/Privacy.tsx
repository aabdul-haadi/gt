import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEO } from "@/components/SEO";

const Privacy = () => (
  <>
    <SEO title="Privacy Policy — Techcare General Trading" />
    <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
    <section className="section">
      <div className="container-page max-w-3xl prose prose-lg">
        <h1>Privacy Policy</h1>
        <p className="text-muted-foreground">
          This Privacy Policy describes how Techcare General Trading L.L.C
          ("we", "us") collects, uses and protects information you provide via
          our website. We are committed to handling your data in compliance with
          UAE data protection regulations.
        </p>
        <h2>Information We Collect</h2>
        <p>Name, email, phone, company and any details you submit via our forms.</p>
        <h2>How We Use Your Information</h2>
        <p>To respond to your inquiries, prepare quotations, and improve our services.</p>
        <h2>Cookies</h2>
        <p>We use essential cookies for site functionality and analytics cookies for performance.</p>
        <h2>Your Rights</h2>
        <p>You may request access, correction or deletion of your personal data at any time.</p>
        <h2>Contact</h2>
        <p>For privacy questions, email <a href="mailto:info@techcaretrading.com">info@techcaretrading.com</a>.</p>
      </div>
    </section>
  </>
);

export default Privacy;

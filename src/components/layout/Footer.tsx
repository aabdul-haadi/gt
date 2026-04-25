import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { company } from "@/data/company";
import { productCategories } from "@/data/products";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container-page py-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-md bg-gradient-accent grid place-items-center font-display font-extrabold">
              T
            </div>
            <div className="leading-tight">
              <div className="font-display font-extrabold text-base">TECHCARE</div>
              <div className="text-[11px] tracking-[0.18em] uppercase opacity-80">
                General Trading
              </div>
            </div>
          </div>
          <p className="text-sm opacity-90 max-w-sm">
            ISO 9001:2015 certified UAE trading partner serving Power, Industrial,
            Oil & Gas, Construction and Commercial sectors since 2022.
          </p>
          <div className="flex gap-2 pt-2">
            {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="h-9 w-9 rounded-md bg-white/10 hover:bg-accent grid place-items-center transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-sm font-display font-bold uppercase tracking-wider text-primary-foreground mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/about" className="hover:text-accent-foreground hover:opacity-100">About Us</Link></li>
            <li><Link to="/clients" className="hover:opacity-100">Clients</Link></li>
            <li><Link to="/blog" className="hover:opacity-100">Blog</Link></li>
            <li><Link to="/contact" className="hover:opacity-100">Contact</Link></li>
            <li><Link to="/privacy" className="hover:opacity-100">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:opacity-100">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-display font-bold uppercase tracking-wider mb-4">
            Categories
          </h4>
          <ul className="space-y-2 text-sm opacity-90 columns-1">
            {productCategories.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link to={`/products/${c.slug}`} className="hover:opacity-100">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-display font-bold uppercase tracking-wider mb-4">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-accent-glow" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-accent-glow" />
              <a href={`tel:${company.phoneRaw}`} className="hover:opacity-100">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 mt-0.5 text-accent-glow" />
              <a href={`mailto:${company.email}`} className="hover:opacity-100">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col md:flex-row gap-2 items-center justify-between text-xs opacity-80">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>{company.iso} · Dubai, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
};

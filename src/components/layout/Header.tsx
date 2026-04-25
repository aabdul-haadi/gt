import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/data/products";
import { company } from "@/data/company";
import { QuoteDialog } from "@/components/QuoteDialog";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products & Services", mega: true },
  { to: "/clients", label: "Clients" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-border shadow-card"
          : "bg-background border-transparent"
      )}
    >
      {/* Top utility bar */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="container-page flex items-center justify-between py-1.5">
          <span className="opacity-90">{company.iso} · Dubai, UAE</span>
          <div className="flex items-center gap-4">
            <a href={`tel:${company.phoneRaw}`} className="hover:text-accent-foreground/90 inline-flex items-center gap-1.5">
              <Phone className="h-3 w-3" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="hover:opacity-90">
              {company.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container-page flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="h-10 w-10 rounded-md bg-gradient-accent text-accent-foreground grid place-items-center font-display font-extrabold shadow-accent">
            T
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-primary text-base md:text-lg">
              TECHCARE
            </div>
            <div className="text-[10px] md:text-[11px] text-muted-foreground tracking-[0.18em] uppercase -mt-0.5">
              General Trading
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            item.mega ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-2 text-sm font-semibold inline-flex items-center gap-1 transition-colors",
                      isActive ? "text-accent" : "text-foreground hover:text-accent"
                    )
                  }
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </NavLink>
                {megaOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[720px]">
                    <div className="bg-popover border border-border rounded-lg shadow-elevated p-4 grid grid-cols-2 gap-1">
                      {productCategories.map((c) => {
                        const Icon = c.icon;
                        return (
                          <Link
                            key={c.slug}
                            to={`/products/${c.slug}`}
                            className="flex items-start gap-3 p-2.5 rounded-md hover:bg-secondary transition-colors group"
                          >
                            <div className="h-9 w-9 rounded-md bg-secondary text-primary grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                              <Icon className="h-4.5 w-4.5" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-primary">
                                {c.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {c.short}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm font-semibold transition-colors",
                    isActive ? "text-accent" : "text-foreground hover:text-accent"
                  )
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <QuoteDialog>
            <Button className="bg-accent hover:bg-accent-glow text-accent-foreground shadow-accent font-semibold">
              Request a Quote
            </Button>
          </QuoteDialog>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 -mr-2 text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-3 flex flex-col">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "py-2.5 text-sm font-semibold border-b border-border/60 last:border-0",
                    isActive ? "text-accent" : "text-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <QuoteDialog>
              <Button className="mt-3 w-full bg-accent hover:bg-accent-glow text-accent-foreground font-semibold">
                Request a Quote
              </Button>
            </QuoteDialog>
          </div>
        </div>
      )}
    </header>
  );
};

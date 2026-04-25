import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

type Crumb = { label: string; to?: string };

export const Breadcrumbs = ({ items }: { items: Crumb[] }) => {
  const location = useLocation();
  if (location.pathname === "/") return null;
  return (
    <nav aria-label="Breadcrumb" className="bg-secondary/60 border-b border-border">
      <div className="container-page py-3 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-accent">
          <Home className="h-3.5 w-3.5" /> Home
        </Link>
        {items.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5" />
            {c.to ? (
              <Link to={c.to} className="hover:text-accent">{c.label}</Link>
            ) : (
              <span className="text-foreground font-medium">{c.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
};

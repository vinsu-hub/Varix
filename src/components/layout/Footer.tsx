import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/site-config";

const columns = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Services",
    links: services.map((service) => ({ href: "/services", label: service.name })),
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-border border-t">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="text-foreground font-mono text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </span>
          <p className="text-muted mt-3 max-w-xs text-sm">{siteConfig.tagline}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted hover:text-foreground mt-4 inline-block text-sm transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>

        {columns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h2 className="text-foreground text-sm font-medium">{column.heading}</h2>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <Container className="border-border text-muted flex flex-col gap-2 border-t py-6 text-xs sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>PLACEHOLDER branding — swap when brand kit is ready.</p>
      </Container>
    </footer>
  );
}

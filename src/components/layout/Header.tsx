import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";

const navLinks = [
  { href: "/work", label: "PROJECTS" },
  { href: "/blog", label: "BLOG" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "RESUME" },
];

export function Header() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-inter)] text-lg font-bold tracking-tight text-white focus-visible:outline-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Varix
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-inter)] text-[16px] font-medium text-white/80 uppercase transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileNav links={navLinks} />
      </Container>
    </header>
  );
}

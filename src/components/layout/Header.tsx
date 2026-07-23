"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";

const navLinks = [
  { href: "/work", label: "PROJECTS" },
  { href: "/blog", label: "BLOG" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "fixed bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "absolute"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="focus-visible:outline-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <Image src="/logo.png" alt="Varix" width={120} height={40} priority />
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

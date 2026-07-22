"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
};

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center text-white focus-visible:outline-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center text-white focus-visible:outline-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <X size={24} />
          </button>

          <ul className="flex flex-col items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-[family-name:var(--font-inter)] text-2xl font-medium uppercase text-white transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

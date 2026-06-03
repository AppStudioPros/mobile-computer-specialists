"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Computer Repairs", href: "/computer-repairs" },
  { label: "Custom PCs", href: "/custom-pcs" },
  { label: "Websites", href: "/websites" },
  { label: "Marketing", href: "/marketing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--color-mcs-ink)]/85 backdrop-blur-xl border-b border-[var(--color-mcs-line)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-xl lg:text-2xl font-black tracking-tight">
            <span className="mcs-gradient-text">M.cs</span>
          </span>
          <span className="hidden md:inline text-xs text-[var(--color-mcs-subtitle)] font-medium tracking-wider uppercase">
            Mobile Computer Specialists
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:7202760797"
            className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-[var(--color-mcs-amber)] transition-colors"
          >
            <Phone className="w-4 h-4" />
            720-276-0797
          </a>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full mcs-gradient-amber text-[var(--color-mcs-ink)] text-sm font-bold hover:scale-105 transition-transform"
          >
            Free Diagnostic
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-[var(--color-mcs-ink)] border-t border-[var(--color-mcs-line)]"
        >
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-[var(--color-mcs-line)]">
              <a
                href="tel:7202760797"
                className="flex items-center gap-2 text-base font-semibold text-white"
              >
                <Phone className="w-5 h-5" />
                720-276-0797
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="px-5 py-3 rounded-full mcs-gradient-amber text-[var(--color-mcs-ink)] text-base font-bold text-center"
              >
                Claim Free Diagnostic
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
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
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-[var(--color-mcs-page)]/90 backdrop-blur-xl border-b border-[var(--color-mcs-line)] shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/brand/logo-trimmed.png"
            alt="Mobile Computer Specialists"
            width={1544}
            height={584}
            priority
            className="h-9 lg:h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--color-mcs-amber)]",
                isActive(link.href)
                  ? "text-[var(--color-mcs-amber)] font-semibold"
                  : scrolled
                    ? "text-[var(--color-mcs-text)]/75"
                    : "text-white/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:7202760797"
            className={cn(
              "text-sm font-semibold transition-colors",
              scrolled
                ? "text-[var(--color-mcs-text)] hover:text-[var(--color-mcs-amber-deep)]"
                : "text-white hover:text-[var(--color-mcs-amber)]"
            )}
          >
            720-276-0797
          </a>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full mcs-gradient-amber text-[var(--color-mcs-ink)] text-sm font-bold hover:scale-105 transition-transform shadow-sm"
          >
            Free Diagnostic
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "lg:hidden p-2 transition-colors",
            scrolled || open ? "text-[var(--color-mcs-text)]" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-6 bg-current transition-transform",
                open && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-current transition-opacity",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-current transition-transform",
                open && "-rotate-45 -translate-y-2"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[var(--color-mcs-page)] border-t border-[var(--color-mcs-line)] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-[var(--color-mcs-amber)]",
                    isActive(link.href)
                      ? "text-[var(--color-mcs-amber)] font-semibold"
                      : "text-[var(--color-mcs-text)]/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-[var(--color-mcs-line)]">
                <a
                  href="tel:7202760797"
                  className="text-base font-semibold text-[var(--color-mcs-text)]"
                >
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
      </AnimatePresence>
    </header>
  );
}

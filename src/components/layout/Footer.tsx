import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-mcs-ink)] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/brand/logo-white-trimmed.png"
              alt="Mobile Computer Specialists"
              width={1544}
              height={584}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-white/55 mb-6 max-w-sm leading-relaxed">
              Mobile Computer Specialists. Denver&apos;s trusted IT service for
              over 26 years. We come to you.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/75">
              <a
                href="tel:7202760797"
                className="hover:text-[var(--color-mcs-amber)] transition-colors"
              >
                720-276-0797
              </a>
              <a
                href="mailto:info@mobilecomputerspecialists.com"
                className="hover:text-[var(--color-mcs-amber)] transition-colors"
              >
                info@mobilecomputerspecialists.com
              </a>
              <div>Denver, Colorado</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/65">
              <li>
                <Link href="/computer-repairs" className="hover:text-white">
                  Computer Repairs
                </Link>
              </li>
              <li>
                <Link href="/custom-pcs" className="hover:text-white">
                  Custom PCs
                </Link>
              </li>
              <li>
                <Link href="/websites" className="hover:text-white">
                  Websites
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="hover:text-white">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/65">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://webdesignpros365.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Web Design Pros 365 ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Mobile Computer Specialists. All
            rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Home of the Free PC Diagnostics
          </p>
        </div>
      </div>
    </footer>
  );
}

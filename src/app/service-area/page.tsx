import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import PageCta from "@/components/ui/PageCta";

export const metadata: Metadata = {
  title:
    "Service Area | Mobile Computer Repair Across Denver Metro | Mobile Computer Specialists",
  description:
    "We come to you across the Denver metro and the surrounding Front Range. Mobile computer repair in Denver, Lakewood, Littleton, Westminster, Wheat Ridge, Arvada, Commerce City and beyond. Free diagnostics. No trip fee.",
  alternates: { canonical: "/service-area" },
};

const cities = [
  "Arvada",
  "Denver",
  "Lakewood",
  "Littleton",
  "Westminster",
  "Wheat Ridge",
  "Commerce City",
  "Broomfield",
  "Thornton",
  "Northglenn",
  "Golden",
  "Englewood",
];

const counties = [
  "Adams County",
  "Arapahoe County",
  "Broomfield County",
  "Denver County",
  "Douglas County",
  "Jefferson County",
];

// Service-area LocalBusiness schema — NO street address (mobile, we-come-to-you).
const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mobile Computer Specialists",
  description:
    "Mobile computer repair and custom PC builds across the Denver metro. We come to you. Free diagnostics, honest by-the-job pricing.",
  url: "https://mobilecomputerspecialists.com/service-area",
  telephone: "+1-720-276-0797",
  email: "info@mobilecomputerspecialists.com",
  priceRange: "Free diagnostics; pricing by job",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "170",
  },
  areaServed: [
    ...counties.map((c) => ({
      "@type": "AdministrativeArea",
      name: `${c}, CO`,
    })),
    ...cities.map((c) => ({ "@type": "City", name: `${c}, CO` })),
  ],
};

export default function ServiceAreaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow="Service Area"
        title="We come to"
        highlight="your door"
        subtitle="Mobile computer repair across the Denver metro. No shop to drive to. No trip fee. We bring the fix to you, at home or at the office."
      />

      {/* Coverage intro */}
      <section className="py-20 lg:py-28 bg-[var(--color-mcs-page)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-4">
              Where We Work
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight mb-5">
              Serving the Denver metro and the surrounding Front Range.
            </h2>
            <p className="text-lg text-[var(--color-mcs-muted)] leading-relaxed">
              For more than 26 years we have made house calls and office visits
              across the Front Range. If your computer is slow, broken, or
              hacked, we travel to you, run a free diagnostic, and tell you
              honestly what it needs. Some fixes happen right there on the spot.
            </p>
          </div>

          {/* Counties */}
          <div className="mb-12">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-mcs-text)] mb-5">
              Counties We Cover
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {counties.map((c, i) => (
                <div
                  key={c}
                  className="group relative overflow-hidden p-5 rounded-2xl mcs-card-light shadow-sm hover:shadow-md hover:border-[var(--color-mcs-amber)]/50 transition-all"
                >
                  <span className="absolute left-0 top-0 h-full w-1 bg-[var(--color-mcs-amber)] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                  <div className="text-sm font-bold text-[var(--color-mcs-text)]">
                    {c}
                  </div>
                  <div className="text-xs text-[var(--color-mcs-muted)] mt-0.5">
                    Colorado
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-mcs-text)] mb-5">
              Cities &amp; Towns We Serve
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {cities.map((c) => (
                <div
                  key={c}
                  className="px-4 py-3 rounded-xl bg-[var(--color-mcs-page-2)] border border-[var(--color-mcs-line)] text-sm font-semibold text-[var(--color-mcs-text)]"
                >
                  {c}, CO
                </div>
              ))}
            </div>
            <p className="text-sm text-[var(--color-mcs-faint)] mt-5">
              Not sure if you are in range? Give us a call. If you are near the
              Denver metro, there is a good chance we can reach you.
            </p>
          </div>
        </div>
      </section>

      {/* Why mobile */}
      <section className="py-20 lg:py-28 bg-[var(--color-mcs-page-2)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-4">
              Why Mobile
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight">
              The fix comes to you. That is the whole point.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                t: "No Unplugging Everything",
                b: "Leave your setup where it is. We work on it in place, monitors, cables, printers and all.",
              },
              {
                t: "No Trip Fee",
                b: "We do not charge you to show up. The diagnostic is free and the visit is part of the service.",
              },
              {
                t: "Home or Office",
                b: "From a single home laptop to a full office of workstations, we come to where the work is.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="group relative overflow-hidden p-7 rounded-2xl mcs-card-light shadow-sm hover:shadow-md hover:border-[var(--color-mcs-amber)]/50 transition-all"
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-[var(--color-mcs-amber)] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                <h3 className="text-lg font-bold text-[var(--color-mcs-text)] mb-2">
                  {item.t}
                </h3>
                <p className="text-sm text-[var(--color-mcs-muted)] leading-relaxed">
                  {item.b}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/computer-repairs"
              className="text-sm font-bold text-[var(--color-mcs-amber-deep)] hover:text-[var(--color-mcs-amber)] transition-colors"
            >
              See everything we repair &rarr;
            </Link>
          </div>
        </div>
      </section>

      <PageCta
        title="In the Denver metro? Let us come to you."
        subtitle="Book a free diagnostic and we will travel to your home or office. No trip fee. No obligation."
      />
    </>
  );
}

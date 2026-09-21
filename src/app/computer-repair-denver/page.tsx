import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Computer Repair Denver CO | Mobile PC & Mac Repair | Mobile Computer Specialists",
  description:
    "Mobile computer repair in Denver, CO. We come to your home or office — free PC diagnostic, PC and Mac repair, virus removal, data recovery. No trip fee. 26+ years serving Denver.",
  alternates: { canonical: "https://mobilecomputerspecialists.com/computer-repair-denver" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mobile Computer Specialists — Denver Computer Repair",
  description: "Mobile computer repair in Denver, CO. Free diagnostics, PC and Mac repair, virus removal, data recovery, IT support. We come to your home or office. No trip fee.",
  url: "https://mobilecomputerspecialists.com/computer-repair-denver",
  telephone: "+17204735153",
  areaServed: [
    { "@type": "City", name: "Denver" },
    { "@type": "City", name: "Five Points" },
    { "@type": "City", name: "Capitol Hill" },
    { "@type": "City", name: "Cherry Creek" },
    { "@type": "City", name: "LoDo" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "170", bestRating: "5" },
  sameAs: ["https://www.bbb.org/us/co/arvada/profile/computer-repair/mobile-computer-specialists-1296-90100509"],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mobilecomputerspecialists.com" },
    { "@type": "ListItem", position: 2, name: "Denver Computer Repair", item: "https://mobilecomputerspecialists.com/computer-repair-denver" },
  ],
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is there a computer repair service in Denver that comes to you?", acceptedAnswer: { "@type": "Answer", text: "Yes. Mobile Computer Specialists comes to your home or office anywhere in Denver with no trip fee and no obligation. Free PC diagnostic on every job." } },
    { "@type": "Question", name: "How much does computer repair cost in Denver?", acceptedAnswer: { "@type": "Answer", text: "The diagnostic is always free. Repair pricing depends on the issue and parts required. Mobile Computer Specialists gives you a clear quote before any work begins." } },
    { "@type": "Question", name: "Can you fix my Mac in Denver?", acceptedAnswer: { "@type": "Answer", text: "Yes. Mobile Computer Specialists repairs MacBook, MacBook Pro, MacBook Air, and iMac at your Denver home or office." } },
    { "@type": "Question", name: "How long has Mobile Computer Specialists served Denver?", acceptedAnswer: { "@type": "Answer", text: "Over 26 years, since 1998. Mobile Computer Specialists has been the Denver metro's trusted mobile IT service for more than two decades." } },
  ],
};

const services = [
  { label: "PC & Mac Repair", desc: "Hardware, software, screen, keyboard, battery — repaired at your Denver home or office.", href: "/computer-repairs#pc-mac-repair" },
  { label: "Virus & Malware Removal", desc: "Full infection removal, entry-point identification, and reinfection prevention.", href: "/computer-repairs#virus-removal" },
  { label: "Data Recovery", desc: "Recover files from failing or crashed drives before they're gone for good.", href: "/computer-repairs#data-recovery" },
  { label: "IT Support", desc: "On-call tech support for Denver homes and small businesses.", href: "/computer-repairs#it-support" },
  { label: "Computer Cleanup", desc: "Speed up a slow computer without buying new hardware.", href: "/computer-repairs#computer-cleanup" },
  { label: "Free PC Diagnostic", desc: "Every job starts with a free assessment — no charge if you don't proceed.", href: "/contact" },
];

export default function DenverComputerRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      {/* Hero */}
      <section className="relative py-24 md:py-36 px-6 text-center" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)" }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#60a5fa" }}>Denver, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Denver Computer Repair<br /><span style={{ color: "#60a5fa" }}>That Comes to You</span></h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
          Free PC diagnostic. No trip fee. We come to your Denver home or office — and we have for over 26 years.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-block uppercase tracking-widest text-sm font-bold px-12 py-4 rounded-lg text-white" style={{ backgroundColor: "#2563eb" }}>
            Book a Free Diagnostic
          </Link>
          <Link href="/computer-repairs" className="inline-block uppercase tracking-widest text-sm font-bold px-12 py-4 rounded-lg" style={{ border: "2px solid rgba(255,255,255,0.3)", color: "white" }}>
            All Repair Services
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white py-5 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold" style={{ color: "#0d1f3c" }}>
          <span>✦ 26+ Years in Denver</span>
          <span>✦ Free Diagnostics</span>
          <span>✦ No Trip Fee</span>
          <span>✦ 4.8 Stars / 170 Reviews</span>
          <span>✦ BBB A+ Accredited</span>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0d1f3c" }}>Denver's Mobile Computer Repair Experts</h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "#4a5568" }}>
            When your computer breaks down in Denver, you shouldn't have to unplug everything, haul it across town, and wait days for a diagnosis. Mobile Computer Specialists has been coming to Denver homes and offices since 1998 — 26+ years of on-site repairs with a simple promise: free diagnostic, honest quote, real fix. We repair every Windows PC and Mac, handle virus removal, data recovery, IT support, and computer cleanup. No trip fee. No obligation. Just real help that shows up.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 px-6" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#0d1f3c" }}>Denver Computer Repair Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link key={s.label} href={s.href} className="block bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <p className="font-bold mb-2" style={{ color: "#0d1f3c" }}>{s.label}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#0d1f3c" }}>Denver Computer Repair FAQ</h2>
          <div className="flex flex-col gap-6">
            {faq.mainEntity.map((item) => (
              <div key={item.name} className="border-b border-gray-100 pb-6">
                <p className="font-bold mb-2" style={{ color: "#0d1f3c" }}>{item.name}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)" }}>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Need Computer Repair in Denver?</h2>
        <p className="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          Book a free diagnostic today. We come to you — no trip fee, no obligation.
        </p>
        <Link href="/contact" className="inline-block uppercase tracking-widest text-sm font-bold px-14 py-4 rounded-lg text-white" style={{ backgroundColor: "#2563eb" }}>
          Book a Free Diagnostic
        </Link>
        <p className="mt-8 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Mobile Computer Specialists | mobilecomputerspecialists.com | (720) 473-5153</p>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Computer Repair Arvada CO | Mobile PC & Mac Repair | Mobile Computer Specialists",
  description:
    "Mobile computer repair in Arvada, CO. We come to your home or office — free PC diagnostic, PC and Mac repair, virus removal, data recovery. No trip fee. BBB A+ accredited.",
  alternates: { canonical: "https://mobilecomputerspecialists.com/computer-repair-arvada" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mobile Computer Specialists — Arvada Computer Repair",
  description: "Mobile computer repair in Arvada, CO. Free diagnostics, PC and Mac repair, virus removal, data recovery, IT support. We come to your home or office. No trip fee. BBB A+ rated.",
  url: "https://mobilecomputerspecialists.com/computer-repair-arvada",
  telephone: "+17204735153",
  areaServed: [
    { "@type": "City", name: "Arvada" },
    { "@type": "City", name: "Wheat Ridge" },
    { "@type": "City", name: "Westminster" },
    { "@type": "City", name: "Golden" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "170", bestRating: "5" },
  sameAs: ["https://www.bbb.org/us/co/arvada/profile/computer-repair/mobile-computer-specialists-1296-90100509"],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mobilecomputerspecialists.com" },
    { "@type": "ListItem", position: 2, name: "Arvada Computer Repair", item: "https://mobilecomputerspecialists.com/computer-repair-arvada" },
  ],
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is there a mobile computer repair service in Arvada, CO?", acceptedAnswer: { "@type": "Answer", text: "Yes. Mobile Computer Specialists is based in the Arvada area and serves Arvada, Wheat Ridge, Westminster, Golden, and the surrounding west Denver communities. We come to your home or office with no trip fee." } },
    { "@type": "Question", name: "Do you repair Macs in Arvada?", acceptedAnswer: { "@type": "Answer", text: "Yes. We repair MacBook, MacBook Pro, MacBook Air, and iMac in Arvada and all surrounding communities." } },
    { "@type": "Question", name: "How quickly can you come to my home in Arvada?", acceptedAnswer: { "@type": "Answer", text: "Scheduling is flexible and we typically offer same-week service. Contact us to check current availability in Arvada." } },
    { "@type": "Question", name: "Is Mobile Computer Specialists BBB accredited?", acceptedAnswer: { "@type": "Answer", text: "Yes. Mobile Computer Specialists is BBB Accredited with an A+ rating. The company is based in the Arvada area and has served the Denver metro for over 26 years." } },
  ],
};

const services = [
  { label: "PC & Mac Repair", desc: "Repairs for all Windows PCs and Mac computers at your Arvada home or office.", href: "/computer-repairs#pc-mac-repair" },
  { label: "Virus & Malware Removal", desc: "Infection removal and protection setup — on-site in Arvada.", href: "/computer-repairs#virus-removal" },
  { label: "Data Recovery", desc: "Recover lost files from failed or damaged drives before they're unrecoverable.", href: "/computer-repairs#data-recovery" },
  { label: "IT Support", desc: "Ongoing tech support for Arvada homes and small businesses.", href: "/computer-repairs#it-support" },
  { label: "Computer Cleanup", desc: "Speed up slow computers without buying new hardware.", href: "/computer-repairs#computer-cleanup" },
  { label: "Free PC Diagnostic", desc: "Every job starts free — no charge if you decide not to proceed.", href: "/contact" },
];

export default function ArvadaComputerRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <section className="relative py-24 md:py-36 px-6 text-center" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)" }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#60a5fa" }}>Arvada, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Arvada Computer Repair<br /><span style={{ color: "#60a5fa" }}>That Comes to You</span></h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
          Free PC diagnostic. No trip fee. We come to your Arvada home or office. BBB A+ accredited.
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

      <section className="bg-white py-5 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold" style={{ color: "#0d1f3c" }}>
          <span>✦ Based in Arvada</span>
          <span>✦ Free Diagnostics</span>
          <span>✦ No Trip Fee</span>
          <span>✦ 4.8 Stars / 170 Reviews</span>
          <span>✦ BBB A+ Accredited</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0d1f3c" }}>Arvada's Local Computer Repair Team</h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "#4a5568" }}>
            Mobile Computer Specialists is based in the Arvada area and has served the local community for over 26 years. When something goes wrong with your computer, we come to you — no hauling equipment across town, no waiting in a drop-off line. Free diagnostic, honest quote, real repair, done at your home or office. We repair Windows PCs, Macs, and everything in between, and we know the west Denver neighborhoods we serve.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#0d1f3c" }}>Arvada Computer Repair Services</h2>
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

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#0d1f3c" }}>Arvada Computer Repair FAQ</h2>
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

      <section className="py-20 px-6 text-center" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)" }}>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Need Computer Repair in Arvada?</h2>
        <p className="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>Book a free diagnostic. We come to you — no trip fee, no obligation.</p>
        <Link href="/contact" className="inline-block uppercase tracking-widest text-sm font-bold px-14 py-4 rounded-lg text-white" style={{ backgroundColor: "#2563eb" }}>
          Book a Free Diagnostic
        </Link>
        <p className="mt-8 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Mobile Computer Specialists | mobilecomputerspecialists.com | (720) 473-5153</p>
      </section>
    </>
  );
}

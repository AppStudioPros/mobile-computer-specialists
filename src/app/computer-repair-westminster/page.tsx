import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Computer Repair Westminster CO | Mobile PC & Mac Repair | Mobile Computer Specialists",
  description:
    "Mobile computer repair in Westminster, CO. We come to your home or office — free PC diagnostic, PC and Mac repair, virus removal, data recovery. No trip fee. Serving Westminster, Thornton, and Broomfield.",
  alternates: { canonical: "https://mobilecomputerspecialists.com/computer-repair-westminster" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mobile Computer Specialists — Westminster Computer Repair",
  description: "Mobile computer repair in Westminster, CO. Free diagnostics, PC and Mac repair, virus removal, data recovery, IT support. We come to your home or office. No trip fee.",
  url: "https://mobilecomputerspecialists.com/computer-repair-westminster",
  telephone: "+17204735153",
  areaServed: [
    { "@type": "City", name: "Westminster" },
    { "@type": "City", name: "Thornton" },
    { "@type": "City", name: "Broomfield" },
    { "@type": "City", name: "Northglenn" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "170", bestRating: "5" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mobilecomputerspecialists.com" },
    { "@type": "ListItem", position: 2, name: "Westminster Computer Repair", item: "https://mobilecomputerspecialists.com/computer-repair-westminster" },
  ],
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Does Mobile Computer Specialists serve Westminster, CO?", acceptedAnswer: { "@type": "Answer", text: "Yes. Mobile Computer Specialists serves Westminster, Thornton, Broomfield, Northglenn, and surrounding north Denver communities. We come to your home or office with no trip fee." } },
    { "@type": "Question", name: "Can you fix my computer in Thornton or Broomfield?", acceptedAnswer: { "@type": "Answer", text: "Yes. We serve all of the north Denver metro including Westminster, Thornton, Broomfield, and Northglenn." } },
    { "@type": "Question", name: "How much does computer repair cost in Westminster?", acceptedAnswer: { "@type": "Answer", text: "The diagnostic is always free. Repair pricing depends on the issue. We give you a clear quote before starting — no surprises." } },
    { "@type": "Question", name: "Do you fix both PCs and Macs in Westminster?", acceptedAnswer: { "@type": "Answer", text: "Yes. We repair all Windows desktops and laptops as well as MacBook, MacBook Pro, MacBook Air, and iMac in Westminster and the north Denver area." } },
  ],
};

const services = [
  { label: "PC & Mac Repair", desc: "All Windows and Mac repairs at your Westminster, Thornton, or Broomfield location.", href: "/computer-repairs#pc-mac-repair" },
  { label: "Virus & Malware Removal", desc: "Full infection cleanup without leaving your home or office.", href: "/computer-repairs#virus-removal" },
  { label: "Data Recovery", desc: "Recover lost files from damaged or failing drives.", href: "/computer-repairs#data-recovery" },
  { label: "IT Support", desc: "Tech support for Westminster homes and north Denver small businesses.", href: "/computer-repairs#it-support" },
  { label: "Computer Cleanup", desc: "Fix a slow computer on-site — no haul-in required.", href: "/computer-repairs#computer-cleanup" },
  { label: "Free Diagnostic", desc: "Free assessment before work begins — no charge if you pass.", href: "/contact" },
];

export default function WestminsterComputerRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <section className="relative py-24 md:py-36 px-6 text-center" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)" }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#60a5fa" }}>Westminster, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Westminster Computer Repair<br /><span style={{ color: "#60a5fa" }}>That Comes to You</span></h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
          Free PC diagnostic. No trip fee. Serving Westminster, Thornton, Broomfield, and Northglenn.
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
          <span>✦ Westminster & North Denver</span>
          <span>✦ Free Diagnostics</span>
          <span>✦ No Trip Fee</span>
          <span>✦ 4.8 Stars / 170 Reviews</span>
          <span>✦ BBB A+ Accredited</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0d1f3c" }}>Mobile Computer Repair for Westminster and North Denver</h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "#4a5568" }}>
            Westminster, Thornton, and Broomfield are busy, growing communities — and computer problems don't slow down for anyone. Mobile Computer Specialists comes to your home or office throughout the north Denver corridor with no trip fee and no obligation. Free diagnostic on every job, honest quote before we start, and most repairs done on the spot. We've been serving this area for over 26 years, and we fix Windows PCs, Macs, and everything in between.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#0d1f3c" }}>Westminster Computer Repair Services</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#0d1f3c" }}>Westminster Computer Repair FAQ</h2>
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
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Need Computer Repair in Westminster?</h2>
        <p className="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>Book a free diagnostic. We come to you — no trip fee, no obligation.</p>
        <Link href="/contact" className="inline-block uppercase tracking-widest text-sm font-bold px-14 py-4 rounded-lg text-white" style={{ backgroundColor: "#2563eb" }}>
          Book a Free Diagnostic
        </Link>
        <p className="mt-8 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Mobile Computer Specialists | mobilecomputerspecialists.com | (720) 473-5153</p>
      </section>
    </>
  );
}

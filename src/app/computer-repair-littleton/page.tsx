import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Computer Repair Littleton CO | Mobile PC & Mac Repair | Mobile Computer Specialists",
  description:
    "Mobile computer repair in Littleton, CO. We come to your home or office — free PC diagnostic, PC and Mac repair, virus removal, data recovery. No trip fee. Serving Littleton and Englewood.",
  alternates: { canonical: "https://mobilecomputerspecialists.com/computer-repair-littleton" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mobile Computer Specialists — Littleton Computer Repair",
  description: "Mobile computer repair in Littleton, CO. Free diagnostics, PC and Mac repair, virus removal, data recovery, IT support. We come to your home or office. No trip fee.",
  url: "https://mobilecomputerspecialists.com/computer-repair-littleton",
  telephone: "+17204735153",
  areaServed: [
    { "@type": "City", name: "Littleton" },
    { "@type": "City", name: "Englewood" },
    { "@type": "City", name: "Centennial" },
    { "@type": "City", name: "Highlands Ranch" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "170", bestRating: "5" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mobilecomputerspecialists.com" },
    { "@type": "ListItem", position: 2, name: "Littleton Computer Repair", item: "https://mobilecomputerspecialists.com/computer-repair-littleton" },
  ],
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Does Mobile Computer Specialists serve Littleton, CO?", acceptedAnswer: { "@type": "Answer", text: "Yes. Mobile Computer Specialists serves Littleton, Englewood, Centennial, Highlands Ranch, and surrounding south Denver communities. We come to your home or office with no trip fee." } },
    { "@type": "Question", name: "Can you fix my computer in Englewood or Highlands Ranch?", acceptedAnswer: { "@type": "Answer", text: "Yes. We serve Englewood, Highlands Ranch, Centennial, and the broader south Denver metro." } },
    { "@type": "Question", name: "Do you repair laptops in Littleton?", acceptedAnswer: { "@type": "Answer", text: "Yes. We repair all Windows laptops and MacBook models at your Littleton home or business. Hardware failures, slow performance, screen issues, and more." } },
    { "@type": "Question", name: "What does a free PC diagnostic include in Littleton?", acceptedAnswer: { "@type": "Answer", text: "We come to your Littleton location, assess the problem, and give you a clear quote. No charge if you decide not to proceed." } },
  ],
};

const services = [
  { label: "PC & Mac Repair", desc: "Windows and Mac repairs done at your Littleton home or office.", href: "/computer-repairs#pc-mac-repair" },
  { label: "Virus & Malware Removal", desc: "Complete infection removal on-site. No drop-off required.", href: "/computer-repairs#virus-removal" },
  { label: "Data Recovery", desc: "Recover files from damaged or failed drives before it's too late.", href: "/computer-repairs#data-recovery" },
  { label: "IT Support", desc: "Home and small business tech support for Littleton and the south metro.", href: "/computer-repairs#it-support" },
  { label: "Computer Cleanup", desc: "Slow computer? We fix it on-site — no new hardware needed in most cases.", href: "/computer-repairs#computer-cleanup" },
  { label: "Free Diagnostic", desc: "Free assessment before work begins. No charge if you don't proceed.", href: "/contact" },
];

export default function LittletonComputerRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <section className="relative py-24 md:py-36 px-6 text-center" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)" }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#60a5fa" }}>Littleton, Colorado</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Littleton Computer Repair<br /><span style={{ color: "#60a5fa" }}>That Comes to You</span></h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
          Free PC diagnostic. No trip fee. We come to Littleton, Englewood, Centennial, and Highlands Ranch.
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
          <span>✦ Littleton & South Denver</span>
          <span>✦ Free Diagnostics</span>
          <span>✦ No Trip Fee</span>
          <span>✦ 4.8 Stars / 170 Reviews</span>
          <span>✦ BBB A+ Accredited</span>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0d1f3c" }}>Mobile Computer Repair for Littleton and the South Metro</h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "#4a5568" }}>
            Littleton is one of the most established communities in the Denver metro, and Mobile Computer Specialists has been serving its residents and businesses for more than two decades. We come to you in Littleton, Englewood, Centennial, Highlands Ranch, and surrounding neighborhoods — with no trip fee, no obligation, and a free diagnostic on every job. Whether it's a Windows laptop that won't boot, a Mac with a failed drive, or a computer that's become too slow to use, we handle it on-site and tell you what's wrong before touching anything.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#0d1f3c" }}>Littleton Computer Repair Services</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#0d1f3c" }}>Littleton Computer Repair FAQ</h2>
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
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Need Computer Repair in Littleton?</h2>
        <p className="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>Book a free diagnostic. We come to you — no trip fee, no obligation.</p>
        <Link href="/contact" className="inline-block uppercase tracking-widest text-sm font-bold px-14 py-4 rounded-lg text-white" style={{ backgroundColor: "#2563eb" }}>
          Book a Free Diagnostic
        </Link>
        <p className="mt-8 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Mobile Computer Specialists | mobilecomputerspecialists.com | (720) 473-5153</p>
      </section>
    </>
  );
}

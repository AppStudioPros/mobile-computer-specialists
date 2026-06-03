import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import RobotBot from "@/components/layout/RobotBot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mobile Computer Specialists | Home of the Free PC Diagnostics",
    template: "%s | Mobile Computer Specialists",
  },
  description:
    "Denver's trusted IT service for over 26 years. We come to you. Free PC diagnostics, computer repair, custom PCs, and IT support. No trip fee. No obligation.",
  keywords: [
    "computer repair denver",
    "free pc diagnostics",
    "mobile computer service",
    "denver it support",
    "custom pc builds",
    "data recovery denver",
    "virus removal denver",
    "mac repair denver",
  ],
  authors: [{ name: "Mobile Computer Specialists" }],
  openGraph: {
    title: "Mobile Computer Specialists | Home of the Free PC Diagnostics",
    description:
      "Denver's trusted IT service for over 26 years. We come to you. Free PC diagnostics, computer repair, custom PCs.",
    url: "https://mobilecomputerspecialists.com",
    siteName: "Mobile Computer Specialists",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[var(--color-mcs-page)] text-[var(--color-mcs-text)] antialiased">
        {/* Lordicon player */}
        <Script
          src="https://cdn.lordicon.com/lordicon.js"
          strategy="afterInteractive"
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <RobotBot />
      </body>
    </html>
  );
}

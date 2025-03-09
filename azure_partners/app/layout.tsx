import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SiteHeader } from "@/components/ui/site-header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Azure Partners - AI & Technology Investment",
  description:
    "Azure Partners spearheads strategic investments in innovative tech and AI startups, driving long-term growth and market leadership.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-blue-900">
      <body
        className={`${poppins.variable} font-poppins min-h-screen flex flex-col`}
      >
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}

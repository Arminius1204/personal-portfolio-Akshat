import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TechSignalBackground } from "@/components/ui/TechSignalBackground";
import { portfolioConfig } from "@/data/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: `${portfolioConfig.name} | Portfolio`,
  description: portfolioConfig.headline,
  keywords: ["Portfolio", "Web Developer", "Software Engineer", "Next.js", "React", "Data Analysis"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-foreground selection:bg-primary/30 selection:text-primary-foreground flex flex-col min-h-screen`}>
        <TechSignalBackground />
        <Navbar />
        <main className="flex-grow flex flex-col relative z-10">
          {children}
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}

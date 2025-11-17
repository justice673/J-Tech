import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
// Particles.js background - commented out for now
// To re-enable: uncomment the import below and uncomment <ParticlesBackground /> in the body
// import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400','500','600','700']
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400','500','600','700']
});

export const metadata: Metadata = {
  title: "J‑Tech",
  description: "Software developer portfolio by fonge justice.",
  openGraph: {
    title: "J‑Tech",
    description: "Software developer portfolio by fonge justice.",
    type: "website",
  },
  icons: {
    icon: "/j-tech-logo.png",
    shortcut: "/j-tech-logo.png",
    apple: "/j-tech-logo.png"
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1120",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Explicit favicon links */}
        <link rel="icon" type="image/png" href="/j-tech-logo.png" />
        <link rel="apple-touch-icon" href="/j-tech-logo.png" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased`} style={{fontFamily: 'var(--font-outfit)'}}> 
        <ThemeProvider>
          {/* Particles.js background - commented out for now */}
          {/* To re-enable: uncomment the line below and uncomment the import at the top */}
          {/* <ParticlesBackground /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

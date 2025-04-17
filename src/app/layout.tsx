import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const jetBrainsMono = Space_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
  ),
  title: {
    default: "Thanapat Koedpiam | Personal Portfolio",
    template: "%s - Thanapat Koedpiam",
  },
  description:
    "Personal portfolio website showcasing the projects and skills of Thanapat Koedpiam, a passionate software developer specializing in web and mobile application development.",
  keywords: [
    "portfolio",
    "developer",
    "web development",
    "Thanapat Koedpiam",
    "software engineer",
    "projects",
  ],
  authors: [{ name: "Thanapat Koedpiam" }],
  creator: "Thanapat Koedpiam",
  icons: {
    icon: "./icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Thanapat Koedpiam - Personal Portfolio",
    description:
      "Portfolio website showcasing the projects and skills of Thanapat Koedpiam",
    siteName: "Thanapat Koedpiam Portfolio",
    images: [
      {
        url: "./icon.png",
        width: 1200,
        height: 630,
        alt: "Thanapat Koedpiam Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${jetBrainsMono.className} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

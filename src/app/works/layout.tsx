import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Explore a collection of projects developed by Thanapat Koedpiam, showcasing various technologies including web applications, mobile apps, and interactive user interfaces. Each project demonstrates skills in frontend and backend development, responsive design, and problem-solving.",
  keywords: [
    "portfolio projects",
    "web development",
    "mobile apps",
    "frontend",
    "backend",
    "React",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title: "Works - Thanapat Koedpiam Portfolio",
    description:
      "Showcase of projects developed by Thanapat Koedpiam featuring web applications, mobile apps, and interactive experiences.",
    url: "/works",
  },
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

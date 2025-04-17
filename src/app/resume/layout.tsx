import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume of Thanapat Koedpiam showcasing education, work experience, technical skills, and qualifications. View my career journey, expertise in software development, and professional achievements.",
  keywords: [
    "resume",
    "CV",
    "curriculum vitae",
    "professional experience",
    "software developer",
    "technical skills",
    "career",
  ],
  openGraph: {
    title: "Resume - Thanapat Koedpiam Portfolio",
    description:
      "Professional resume of Thanapat Koedpiam showcasing education, experience, and technical skills in software development.",
    url: "/resume",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

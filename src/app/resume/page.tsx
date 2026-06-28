"use client";

import Image from "next/image";
import { HiOutlineDownload } from "react-icons/hi";
import { Reveal } from "@/components/motion";

const RESUME_PDF = "/resume/Thanapat Koedpiam - Resume.pdf";
const RESUME_IMG = "/resume/Thanapat Koedpiam - Resume.png";

export default function Resume() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 pb-12 pt-14">
      {/* Heading */}
      <Reveal className="flex flex-col items-center gap-2 text-center">
        <span className="eyebrow">Curriculum Vitae</span>
        <h1 className="text-2xl font-bold tracking-tight">My Resume</h1>
        <p className="max-w-md text-sm text-theme-secondary">
          View it below or download a copy — click the page to open it
          full-size.
        </p>
      </Reveal>

      <Reveal delay={0.05} className="flex flex-col gap-3">
        {/* Download button */}
        <div className="flex justify-end">
          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            <HiOutlineDownload
              size={18}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
            Download PDF
          </a>
        </div>

        {/* Resume preview - click to open full-size PDF */}
        <a
          href={RESUME_PDF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open full-size resume PDF"
          className="group block cursor-zoom-in overflow-hidden rounded-xl border border-theme bg-theme-secondary p-2 transition-colors hover:border-[rgba(255,255,255,0.16)]"
        >
          <Image
            className="w-full rounded-lg transition-transform duration-500 ease-out group-hover:scale-[1.01]"
            src={RESUME_IMG}
            alt="My Resume"
            width={1414}
            height={2000}
            sizes="(max-width: 768px) 100vw, 768px"
            quality={100}
            priority
          />
        </a>
      </Reveal>
    </div>
  );
}

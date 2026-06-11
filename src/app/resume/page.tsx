"use client";

import Image from "next/image";
import { DownloadSimpleIcon } from "@phosphor-icons/react";
import { LinkButton } from "@cloudflare/kumo";

export default function Resume() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 pt-8 px-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold">My Resume</h1>

      {/* Resume Container with Download Button */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full xl:w-[50%] lg:w-[80%] md:w-[80%] flex flex-col">
          {/* Download Button - aligned to the right */}
          <div className="w-full flex justify-end mb-2">
            <LinkButton
              href="/resume/Thanapat Koedpiam - Resume.pdf"
              external
              variant="primary"
              icon={<DownloadSimpleIcon size={18} />}
            >
              Download PDF
            </LinkButton>
          </div>

          {/* Resume Image */}
          <Image
            className="w-full h-full rounded-lg"
            src="/resume/Thanapat Koedpiam - Resume.png"
            alt="My Resume"
            sizes="100vw"
            width={800}
            height={100}
            quality={100}
            priority
          />
        </div>
      </div>

      {/* Description */}
      <p className="text-center text-muted-foreground mt-4">
        This is my professional resume. You can view it directly in the browser
        or download it using the button above.
      </p>
    </div>
  );
}

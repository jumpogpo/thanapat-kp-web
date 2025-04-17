"use client";

import Image from "next/image";
import { HiOutlineDownload } from "react-icons/hi";

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
            <a
              href="/resume/Thanapat Koedpiam - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <HiOutlineDownload size={18} />
              Download PDF
            </a>
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
      <p className="text-center text-theme-500 mt-4">
        This is my professional resume. You can view it directly in the browser
        or download it using the button above.
      </p>
    </div>
  );
}

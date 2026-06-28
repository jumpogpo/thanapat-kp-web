"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { aboutData } from "@/data/about";
import Topic from "./topic";
import { Reveal } from "./motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const formatBio = (bio: string): React.ReactNode => {
  const parts = bio.split(/<strong>|<\/strong>/);

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="font-semibold text-theme-primary">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};

export default function About() {
  const data = aboutData;

  return (
    <section className="flex w-full flex-col gap-14">
      {/* Hero */}
      <div className="flex flex-col items-center gap-5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative"
        >
          <span
            aria-hidden
            className="absolute -inset-3 rounded-full bg-white/10 blur-2xl"
          />
          <Image
            src={data.avatar}
            className="relative rounded-full ring-1 ring-white/20 ring-offset-2 ring-offset-[#0d0d0f]"
            alt="Profile"
            width={104}
            height={104}
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="flex flex-col items-center gap-1.5"
        >
          <h1 className="text-2xl font-bold tracking-tight">{data.name}</h1>
          <p className="text-theme-secondary">{data.title}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-theme bg-theme-secondary px-3 py-1 text-xs text-theme-secondary"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
          Computer Science · KMITL
        </motion.div>
      </div>

      {/* About */}
      <div className="flex w-full flex-col gap-4">
        <Reveal>
          <Topic title="About" />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-base leading-relaxed text-theme-secondary">
            {formatBio(data.bio)}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex w-full justify-end">
            <Link
              className="group inline-flex flex-row items-center gap-2 text-sm text-theme-secondary transition-colors hover:text-theme-primary"
              href="/resume"
            >
              <span>View Resume</span>
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

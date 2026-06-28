"use client";

import { FaGithub, FaRegCopy, FaCheck, FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from "react";
import { Reveal } from "./motion";

const socials = [
  { href: "https://github.com/jumpogpo", label: "GitHub", Icon: FaGithub },
  {
    href: "https://www.instagram.com/kun.tnp/",
    label: "Instagram",
    Icon: FaInstagram,
  },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "??????";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <footer className="mt-auto w-full px-6 pb-8 pt-16">
      <div className="mx-auto max-w-2xl">
        <div className="hairline mb-10" />

        <Reveal className="flex flex-col items-center gap-5 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="eyebrow">Get in touch</span>
            <h2 className="text-lg font-bold tracking-tight">
              Let&apos;s connect
            </h2>
          </div>

          {/* Email */}
          <button
            className="group relative inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 text-black transition-transform duration-200 hover:scale-105 active:scale-95"
            onClick={copyToClipboard}
            aria-label="Copy email to clipboard"
          >
            <MdOutlineMailOutline size={20} />
            <span className="font-semibold">{email}</span>
            {copied ? (
              <FaCheck className="text-emerald-600" />
            ) : (
              <FaRegCopy className="opacity-70" />
            )}

            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-theme-elevated px-2 py-1 text-xs text-theme-primary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative grid h-10 w-10 place-items-center rounded-lg border border-theme text-theme-faint transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.16)] hover:text-theme-primary"
              >
                <Icon size={20} />
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-theme-elevated px-2 py-1 text-xs text-theme-primary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <p className="text-xs text-theme-faint">
            © 2026 Thanapat Koedpiam · Built with Next.js
          </p>
        </Reveal>
      </div>
    </footer>
  );
}

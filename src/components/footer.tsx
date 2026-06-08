"use client";

import { FaGithub, FaRegCopy, FaCheck, FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "??????";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 800);
  };

  return (
    <footer className="w-full mt-auto pt-8 pb-4 px-6">
      <div className="flex flex-col justify-center items-center space-y-4">
        <span>Let&apos;s connect</span>
        {/* Email */}
        <button
          className="bg-primary text-primary-foreground py-3 px-7 rounded-xl flex items-center space-x-3 cursor-pointer hover:bg-primary/90 transition-colors duration-150 ease-out relative group"
          onClick={copyToClipboard}
          aria-label="Copy email to clipboard"
        >
          <MdOutlineMailOutline size={20} />
          <span className="font-semibold">{email}</span>
          <div className="relative w-4 h-4 flex items-center justify-center">
            <span
              className={`absolute transition-[transform,opacity] duration-200 ease-out ${
                copied
                  ? "scale-75 opacity-0 rotate-45"
                  : "scale-100 opacity-100 rotate-0"
              }`}
            >
              <FaRegCopy size={15} />
            </span>
            <span
              className={`absolute transition-[transform,opacity] duration-200 ease-out ${
                copied
                  ? "scale-100 opacity-100 rotate-0"
                  : "scale-75 opacity-0 -rotate-45"
              }`}
            >
              <FaCheck size={15} />
            </span>
          </div>

          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground border border-border shadow-md text-sm py-1 px-2 rounded opacity-0 scale-95 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-[opacity,transform] duration-200 ease-out pointer-events-none whitespace-nowrap">
            {copied ? "Copied!" : "Copy"}
          </span>
        </button>

        {/* Social Media */}
        <div className="flex space-x-4">
          {/* GitHub */}
          <a
            href="https://github.com/jumpogpo"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group transition-colors duration-150 ease-out p-1"
          >
            <FaGithub
              className="text-muted-foreground group-hover:text-foreground transition-colors duration-200"
              size={24}
            />

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground border border-border shadow-md text-sm py-1 px-2 rounded opacity-0 scale-95 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-[opacity,transform] duration-200 ease-out pointer-events-none whitespace-nowrap">
              GitHub
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kun.tnp/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group transition-colors duration-150 ease-out p-1"
          >
            <FaInstagram
              className="text-muted-foreground group-hover:text-foreground transition-colors duration-200"
              size={24}
            />

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground border border-border shadow-md text-sm py-1 px-2 rounded opacity-0 scale-95 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-[opacity,transform] duration-200 ease-out pointer-events-none whitespace-nowrap">
              Instagram
            </span>
          </a>
        </div>

        <span className="text-muted-foreground text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/jumpogpo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground hover:underline"
          >
            jumpogpo
          </a>
        </span>
      </div>
    </footer>
  );
}

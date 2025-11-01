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
          className="bg-white text-black py-3 px-7 rounded-xl flex items-center space-x-3 cursor-pointer hover:text-gray-800 hover:scale-105 transition-all relative group"
          onClick={copyToClipboard}
          aria-label="Copy email to clipboard"
        >
          <MdOutlineMailOutline size={20} />
          <span className="font-semibold">{email}</span>
          {copied ? <FaCheck /> : <FaRegCopy />}

          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#393839] text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
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
            className="relative group"
          >
            <FaGithub
              className="text-textcontent text-[#6b6b6b] hover:text-white transition duration-100 hover:scale-110"
              size={24}
            />

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#393839] text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              GitHub
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kun.tnp/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <FaInstagram
              className="text-textcontent text-[#6b6b6b] hover:text-white transition duration-100 hover:scale-110"
              size={24}
            />

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#393839] text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Instagram
            </span>
          </a>
        </div>

        <span>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/jumpogpo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:font-semibold  hover:underline"
          >
            jumpogpo
          </a>
        </span>
      </div>
    </footer>
  );
}

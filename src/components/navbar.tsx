"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex w-full justify-between p-4 space-x-4 text-lg px-6 items-center">
      <Link href="/" className="font-semibold">
        <span className="text-theme-primary text-base">THANAPAT-KP</span>
      </Link>

      {/* Menu */}
      <div className="flex space-x-4 sm:space-x-8 text-base text-theme-secondary">
        <Link
          href="/"
          className={`hover:text-theme-primary transition-colors duration-200 ${
            pathname === "/"
              ? "font-semibold text-theme-primary underline underline-offset-6"
              : "hover:underline underline-offset-6"
          }`}
        >
          <span>About</span>
        </Link>

        <Link
          href="/works"
          className={`hover:text-theme-primary transition-colors duration-200 ${
            pathname === "/works"
              ? "font-semibold text-theme-primary underline underline-offset-6"
              : "hover:underline underline-offset-6"
          }`}
        >
          <span>Works</span>
        </Link>

        <Link
          href="/resume"
          className={`hover:text-theme-primary transition-colors duration-200 ${
            pathname === "/resume"
              ? "font-semibold text-theme-primary underline underline-offset-6"
              : "hover:underline underline-offset-6"
          }`}
        >
          <span>Resume</span>
        </Link>
      </div>
    </div>
  );
}

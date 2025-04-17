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
      <div className="flex space-x-4 sm:space-x-8 text-base">
        <Link
          href="/"
          className={`hover:font-semibold transition-all ${
            pathname === "/"
              ? "font-semibold underline underline-offset-6"
              : "hover:underline underline-offset-6"
          }`}
        >
          <span>About</span>
        </Link>

        <Link
          href="/works"
          className={`hover:font-semibold transition-all ${
            pathname === "/works"
              ? "font-semibold underline underline-offset-6"
              : "hover:underline underline-offset-6"
          }`}
        >
          <span>Works</span>
        </Link>

        <Link
          href="/resume"
          className={`hover:font-semibold transition-all ${
            pathname === "/resume"
              ? "font-semibold underline underline-offset-6"
              : "hover:underline underline-offset-6"
          }`}
        >
          <span>Resume</span>
        </Link>
      </div>
    </div>
  );
}

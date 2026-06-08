"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex w-full justify-between p-4 space-x-4 text-lg px-6 items-center">
      <Link href="/" className="font-semibold">
        <span className="text-foreground text-base">THANAPAT-KP</span>
      </Link>

      {/* Menu and Toggle */}
      <div className="flex items-center space-x-4 sm:space-x-8 text-base">
        <div className="flex space-x-4 sm:space-x-8 text-muted-foreground">
          <Link
            href="/"
            className={`hover:text-foreground transition-colors duration-200 ${
              pathname === "/"
                ? "font-semibold text-foreground underline underline-offset-6"
                : "hover:underline underline-offset-6"
            }`}
          >
            <span>About</span>
          </Link>

          <Link
            href="/works"
            className={`hover:text-foreground transition-colors duration-200 ${
              pathname === "/works"
                ? "font-semibold text-foreground underline underline-offset-6"
                : "hover:underline underline-offset-6"
            }`}
          >
            <span>Works</span>
          </Link>

          <Link
            href="/resume"
            className={`hover:text-foreground transition-colors duration-200 ${
              pathname === "/resume"
                ? "font-semibold text-foreground underline underline-offset-6"
                : "hover:underline underline-offset-6"
            }`}
          >
            <span>Resume</span>
          </Link>
        </div>

        <ThemeToggle />
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-theme bg-[#0d0d0f]/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-base font-bold tracking-tight"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-white transition-transform duration-300 group-hover:scale-125" />
          <span>THANAPAT-KP</span>
        </Link>

        <div className="flex items-center gap-1 text-sm sm:gap-2">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="relative px-3 py-2 transition-colors"
              >
                <span
                  className={
                    active
                      ? "text-theme-primary"
                      : "text-theme-secondary transition-colors hover:text-theme-primary"
                  }
                >
                  {label}
                </span>
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-0.5 h-px bg-white"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}

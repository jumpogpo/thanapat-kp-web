"use client";

import { useTheme } from "@wrksz/themes/client";
import { useEffect, useState } from "react";
import { SunIcon, MoonStarsIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@cloudflare/kumo";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="size-9" />; // Spacer to prevent layout shift
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      shape="square"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative overflow-hidden cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isDark ? <MoonStarsIcon size={18} /> : <SunIcon size={18} />}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}

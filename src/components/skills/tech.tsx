import React from "react";
import Link from "next/link";

export default function Tech({
  name,
  icon,
  url,
  size = 34,
}: {
  name: string;
  icon: React.ReactNode;
  url?: string;
  size?: number;
}) {
  const content = (
    <>
      <div
        className="flex items-center justify-center grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-1"
        style={{ width: size, height: size }}
      >
        {icon}
      </div>
      <span className="text-center text-xs text-theme-faint transition-colors duration-300 group-hover:text-theme-secondary">
        {name}
      </span>
    </>
  );

  if (url) {
    return (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-16 flex-col items-center gap-2"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="group flex w-16 flex-col items-center gap-2">{content}</div>
  );
}

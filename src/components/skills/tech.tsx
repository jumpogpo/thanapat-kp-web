import React from "react";
import Link from "next/link";

export default function Tech({
  name,
  icon,
  url,
  size = 32,
}: {
  name: string;
  icon: React.ReactNode;
  url?: string;
  size?: number;
}) {
  const Content = () => (
    <>
      <div
        className="flex items-center justify-center w-auto"
        style={{ width: size, height: size }}
      >
        {icon}
      </div>
      <div className="flex items-center gap-1 mt-1">
        <span className="text-sm text-textcontent text-center">{name}</span>
      </div>
    </>
  );

  if (url) {
    return (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 w-12 hover:opacity-80 transition-opacity group"
      >
        <Content />
      </Link>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 w-12">
      <Content />
    </div>
  );
}

import Image from "next/image";
import Tag from "./tag";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function WorkCard({
  title,
  image,
  description,
  tags,
  link,
}: {
  title: string;
  image: string;
  description: string;
  tags?: string[];
  link?: string;
}) {
  const inner = (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-theme bg-theme-secondary transition-colors group-hover:border-[rgba(255,255,255,0.16)]">
      {/* Project image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={90}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5">
          <h2 className="text-base font-bold text-theme-primary">{title}</h2>
          {link && (
            <FiArrowUpRight className="h-4 w-4 text-theme-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-theme-primary" />
          )}
        </div>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-theme-secondary">
          {description}
        </p>

        <div className="mt-auto flex flex-row flex-wrap gap-2 pt-4">
          {tags?.map((tag, index) => (
            <Tag key={index} title={tag} />
          ))}
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {inner}
      </Link>
    );
  }

  return <div className="h-full">{inner}</div>;
}

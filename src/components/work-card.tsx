import Image from "next/image";
import Tag from "./tag";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

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
  const content = (
    <div className={`w-full h-full flex flex-col bg-theme-secondary rounded-lg p-6 hover:scale-105 transition-transform group`}>
      {/* Project Image */}
      <div className="relative w-full h-48 mb-3">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          quality={100}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Title with external link icon */}
      <div className="flex flex-row items-center gap-2">
        <h1
          className={`text-base font-semibold text-theme-primary transition-all hover:outline-theme-primary ${
            link ? "group-hover:underline group-hover:underline-offset-5" : ""
          }`}
        >
          {title}
        </h1>
        {link && (
          <FiExternalLink className="w-3.5 h-3.5 text-theme-secondary" />
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-theme-secondary mt-2 mb-4">{description}</p>

      {/* Spacer to push the tags to the bottom */}
      <div className="flex-grow"></div>

      {/* Tags */}
      <div className="flex flex-row flex-wrap gap-2 mt-auto">
        {tags?.map((tag, index) => (
          <Tag key={index} title={tag} />
        ))}
      </div>
    </div>
  );

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        {content}
      </Link>
    );
  }

  return <div className="block w-full h-full">{content}</div>;
}

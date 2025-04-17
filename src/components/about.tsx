import Topic from "./topic";
import Image from "next/image";
import { AboutData } from "../data/about";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const formatBio = (bio: string): React.ReactNode => {
  const parts = bio.split(/<strong>|<\/strong>/);

  return parts.map((part, index) => {
    return index % 2 === 1 ? (
      <span key={index} className="font-semibold text-theme-primary">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    );
  });
};

export default async function About({ data }: { data: AboutData }) {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Image
          src={data.avatar}
          className="rounded-full outline-1 outline-white border-transparent border-3"
          alt="Profile"
          width={100}
          height={100}
        />

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold">{data.name}</h1>
          <h2 className="text-base text-theme-secondary text-center">
            {data.title}
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Topic title="About" />
        <p className="text-base leading-relaxed text-theme-secondary">
          {formatBio(data.bio)}
        </p>

        {/* View Resume */}
        <div className="w-full flex justify-end">
          <Link
            className="inline-flex flex-row gap-2 items-center hover:cursor-pointer hover:underline hover:underline-offset-5 group"
            href="/resume"
          >
            <span className="text-base">View Resume</span>
            <FaArrowRightLong className="group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}

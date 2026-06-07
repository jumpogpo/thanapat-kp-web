import Topic from "./topic";
import { FiExternalLink } from "react-icons/fi";
import { ExperienceItem } from "@/data/experiences";
import Tag from "./tag";

export default async function Experience({ data }: { data: ExperienceItem[] }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Topic */}
      <Topic title="Experiences" />

      <div className="flex flex-col gap-4">
        {data.map((exp, index: number) => {
          const content = (
            <div
              className={`flex flex-col gap-3 bg-theme-secondary p-4 rounded-2xl h-full animate-[fade-slide-in_400ms_var(--ease-out)_forwards] opacity-0 translate-y-3 ${
                exp.link
                  ? "transition-transform duration-200 ease-[var(--ease-out)] [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
                  : ""
              }`}
              style={{ animationDelay: `${50 + index * 50}ms` }}
            >
              <div>
                {/* Title */}
                <h3 className="text-base font-bold flex items-center gap-2">
                  {exp.title}
                  {exp.link && (
                    <FiExternalLink className="w-3.5 h-3.5 text-theme-secondary group-hover:text-theme-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-200 ease-[var(--ease-out)]" />
                  )}
                </h3>

                {/* Company */}
                <div className="flex justify-between text-sm mt-0.5">
                  <p className="text-base text-theme-secondary font-medium">
                    {exp.company}
                  </p>
                  {/* Period */}
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                </div>
              </div>

              {/* Information Bullets */}
              <ul className="list-disc list-inside space-y-1 pl-2">
                {exp.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="text-theme-secondary text-sm">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-row flex-wrap gap-2 mt-auto">
                {exp.tags?.map((tag, index) => (
                  <Tag key={index} title={tag} />
                ))}
              </div>
            </div>
          );

          if (exp.link) {
            return (
              <a
                key={index}
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={index} className="block w-full">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

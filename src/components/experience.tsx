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
        {data.map((exp, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-3 bg-theme-secondary p-4 rounded-2xl hover:scale-105 transition-transform"
          >
            <div>
              {/* Title */}
              <h3 className="text-base font-bold">{exp.title}</h3>

              {/* Compmany */}
              <div className="flex justify-between text-sm">
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-secondary underline flex items-center gap-1 hover:text-theme-primary transition-colors"
                  >
                    {exp.company}
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <p className="text-base text-theme-secondary">
                    {exp.company}
                  </p>
                )}

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
        ))}
      </div>
    </div>
  );
}

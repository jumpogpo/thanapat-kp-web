"use client";

import Topic from "./topic";
import { FiExternalLink } from "react-icons/fi";
import { ExperienceItem } from "@/data/experiences";
import Tag from "./tag";
import { motion } from "framer-motion";

export default function Experience({ data }: { data: ExperienceItem[] }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Topic */}
      <Topic title="Experiences" />

      <div className="flex flex-col gap-4">
        {data.map((exp, index: number) => {
          const content = (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 0.4,
                bounce: 0.1,
                delay: index * 0.05,
              }}
              className={`flex flex-col gap-3 bg-muted p-4 rounded-2xl h-full border border-transparent ${
                exp.link
                  ? "cursor-pointer group transition-colors duration-200 hover:bg-muted/60 hover:border-border"
                  : ""
              }`}
            >
              <div>
                {/* Title */}
                <h3 className="text-base font-bold flex items-center gap-2">
                  {exp.title}
                  {exp.link && (
                    <FiExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors duration-200 ease-out" />
                  )}
                </h3>

                {/* Company */}
                <div className="flex justify-between text-sm mt-0.5">
                  <p className="text-base text-muted-foreground font-medium">
                    {exp.company}
                  </p>
                  {/* Period */}
                  <p className="text-muted-foreground text-sm">{exp.period}</p>
                </div>
              </div>

              {/* Information Bullets */}
              <ul className="list-disc list-inside space-y-1 pl-2">
                {exp.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="text-muted-foreground text-sm">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-row flex-wrap gap-2 mt-auto">
                {exp.tags?.map((tag, index) => (
                  <Tag key={index} title={tag} />
                ))}
              </div>
            </motion.div>
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

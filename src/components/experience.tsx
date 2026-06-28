"use client";

import { FiExternalLink } from "react-icons/fi";
import { experienceData } from "@/data/experiences";
import Topic from "./topic";
import Tag from "./tag";
import { Reveal, Stagger, StaggerItem } from "./motion";

export default function Experience() {
  return (
    <div className="flex w-full flex-col gap-5">
      <Reveal>
        <Topic title="Experience" />
      </Reveal>

      <Stagger className="flex flex-col gap-4">
        {experienceData.map((exp, index) => (
          <StaggerItem
            key={index}
            hoverLift
            className="flex flex-col gap-3 rounded-xl border border-theme bg-theme-secondary p-5 transition-colors hover:border-[rgba(255,255,255,0.16)]"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-bold">{exp.title}</h3>
                <span className="shrink-0 pt-0.5 text-xs text-theme-faint">
                  {exp.period}
                </span>
              </div>

              {exp.link ? (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1 text-sm text-theme-secondary underline-offset-4 transition-colors hover:text-theme-primary hover:underline"
                >
                  {exp.company}
                  <FiExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <p className="text-sm text-theme-secondary">{exp.company}</p>
              )}
            </div>

            <ul className="flex flex-col gap-1.5">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-sm leading-relaxed text-theme-secondary"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-theme-faint" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-1 flex flex-row flex-wrap gap-2">
              {exp.tags?.map((tag, i) => (
                <Tag key={i} title={tag} />
              ))}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

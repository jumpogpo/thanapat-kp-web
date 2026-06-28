"use client";

import Tech from "./tech";
import Topic from "../topic";
import { skills } from "../../data/skills";
import { Reveal, Stagger, StaggerItem } from "../motion";

export default function Skills() {
  // Unique categories, preserving the order they appear in the data
  const categories = Array.from(
    new Set(skills.map((skill) => skill.category))
  ).filter(Boolean) as string[];

  return (
    <div className="flex w-full flex-col gap-6">
      <Reveal>
        <Topic title="Skills" />
      </Reveal>

      <div className="flex flex-col gap-7">
        {categories.map((category) => (
          <Reveal key={category} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="eyebrow">{category}</span>
              <span className="hairline flex-1" />
            </div>

            <Stagger className="flex flex-wrap gap-x-7 gap-y-5" gap={0.04}>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <StaggerItem key={skill.name}>
                      <Tech name={skill.name} icon={<Icon />} />
                    </StaggerItem>
                  );
                })}
            </Stagger>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

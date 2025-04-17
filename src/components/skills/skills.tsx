import Tech from "./tech";
import Topic from "../topic";
import { Skill, skills } from "../../data/skills";

const findSkillData = (
  skillName: string
): { icon?: React.ComponentType; url?: string } => {
  const skillData = skills.find((s) => s.name === skillName);
  return {
    icon: skillData?.icon,
  };
};

export default function Skills({ data }: { data: Skill[] }) {
  // Get unique categories
  const categories = Array.from(
    new Set(data.map((skill) => skill.category))
  ).filter(Boolean) as string[];

  // Group skills by category
  const skillsByCategory: Record<string, Skill[]> = {};

  categories.forEach((category) => {
    skillsByCategory[category] = data.filter(
      (skill) => skill.category === category
    );
  });

  return (
    <div className="flex flex-col gap-10 w-full">
      <Topic title="Skills" />

      <div className="flex flex-col gap-1 w-full px-6">
        {categories.map((category, index) => (
          <div key={category} className="w-full">
            {index > 0 && <div className="w-full h-px bg-white my-4"></div>}
            <div className="flex flex-row flex-wrap gap-x-16 gap-y-5 justify-start pt-2">
              {skillsByCategory[category].map((skill) => {
                const { icon: IconComponent } = skill.icon
                  ? { icon: skill.icon }
                  : findSkillData(skill.name);

                return (
                  <Tech
                    key={skill.name}
                    name={skill.name}
                    icon={IconComponent ? <IconComponent /> : null}
                  />
                );
              })}
            </div>

            <div className="flex justify-end mt-4">
              <div className="text-base font-semibold px-1.5 py-1 bg-theme-secondary rounded-md text-theme-primary">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

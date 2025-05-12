export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  link: string;
  bullets: string[];
  tags: string[];
};

export const experienceData: ExperienceItem[] = [
  {
    title: "TLI Transform Learning Intern",
    company: "Thai Life Insurance",
    period: "2025 - Present",
    link: "https://www.thailife.com/",
    bullets: [
      "Member of BPC team responsible for E-Payment service development and implementation",
    ],
    tags: ["Java"],
  },
  {
    title: "Backend Developer & API Developer",
    company: "JOODPAKJAI on Roblox",
    period: "2020 - 2024",
    link: "https://www.roblox.com/games/4954512662/",
    bullets: [
      "Developed APIs and backend systems for games on the Roblox platform",
      "Designed and implemented core gameplay systems",
      "Developed security systems to prevent cheating and hacking",
    ],
    tags: [
      "Luau",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "BunJs",
    ],
  },
];

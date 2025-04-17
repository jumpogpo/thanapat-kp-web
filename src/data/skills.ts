import {
  TypeScript,
  JavaScript,
  Java,
  NestJS,
  Lua,
  Python,
  NextJs,
  TailwindCSS,
  PostgreSQL,
  MongoDB,
  Redis,
  Prisma,
  Supabase,
  Docker,
  BunJs,
  Git,
  Linux,
  FastAPI,
  Postman,
  Swagger,
  React,
} from "developer-icons";

export type Skill = {
  name: string;
  icon: React.ComponentType;
  category?: "language" | "frontend" | "backend" | "databases" | "tools";
};

export const skills: Skill[] = [
  { name: "TypeScript", icon: TypeScript, category: "language" },
  { name: "JavaScript", icon: JavaScript, category: "language" },
  { name: "Java", icon: Java, category: "language" },
  { name: "Python", icon: Python, category: "language" },
  { name: "Luau", icon: Lua, category: "language" },

  { name: "NextJs", icon: NextJs, category: "frontend" },
  { name: "React", icon: React, category: "frontend" },
  { name: "TailwindCSS", icon: TailwindCSS, category: "frontend" },

  { name: "NestJS", icon: NestJS, category: "backend" },
  { name: "FastAPI", icon: FastAPI, category: "backend" },
  { name: "BunJs", icon: BunJs, category: "backend" },

  { name: "PostgreSQL", icon: PostgreSQL, category: "databases" },
  { name: "MongoDB", icon: MongoDB, category: "databases" },
  { name: "Redis", icon: Redis, category: "databases" },
  { name: "Supabase", icon: Supabase, category: "databases" },
  { name: "Prisma", icon: Prisma, category: "databases" },

  { name: "Docker", icon: Docker, category: "tools" },
  { name: "Git", icon: Git, category: "tools" },
  { name: "Linux", icon: Linux, category: "tools" },
  { name: "Postman", icon: Postman, category: "tools" },
  { name: "Swagger", icon: Swagger, category: "tools" },
];

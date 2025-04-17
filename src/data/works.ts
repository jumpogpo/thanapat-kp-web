export type WorksType = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
};

export const worksData: WorksType[] = [
  {
    title: "JOODPAKJAI on Roblox",
    description:
      "JOODPAKJAI is a custom game built on Roblox, a platform that lets creators develop and publish games using the Lua-based language, Luau. I designed and developed the full gameplay system and backend, including interactive mechanics, internal APIs, and player data management — all optimized for a smooth and scalable multiplayer experience.",
    image: "/works/joodpakjai.png",
    tags: [
      "Luau",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "BunJs",
    ],
    link: "https://www.roblox.com/games/4954512662/",
  },
  {
    title: "Science Faculty Maintenance System",
    description:
      "Science Fixit Backend is a maintenance management system for the Faculty of Science at King Mongkut's Institute of Technology Ladkrabang (KMITL). It allows users to report equipment repairs, track request statuses, and efficiently manage user roles.",
    image: "/works/science-fixit.png",
    tags: [
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "Docker",
      "Swagger",
      "JWT",
      "BunJs",
      "Prisma",
    ],
    link: "https://github.com/jumpogpo/science-fixit",
  },
  {
    title: "Xviper Robux Bot",
    description:
      "A Discord bot for selling Robux on Roblox, featuring automated payments via Truewallet Voucher and Thai bank transfers. The system handles credit management with automatic Robux delivery through group funds and includes admin tools for rate adjustments.",
    image: "/works/robux-bot.png",
    tags: ["Discord.js", "BunJs", "Prisma", "Supabase", "Docker", "Roblox API"],
  },
  {
    title: "Bank Manager API",
    description:
      "A RESTful API system for managing banking operations including account management, transactions, and user authentication. Provides secure endpoints for financial operations with comprehensive documentation. The system can also generate transaction receipt images for verification purposes.",
    image: "/works/bank-manager.png",
    tags: ["FastAPI", "MongoDB", "Swagger", "Docker"],
    link: "https://github.com/jumpogpo/bank-manager-api",
  },
  {
    title: "TrueWallet Voucher API",
    description:
      "A RESTful API for redeeming TrueWallet vouchers. This lightweight service allows quick and easy redemption of TrueWallet gift vouchers by providing the voucher code and mobile number. Built with high performance in mind using Golang.",
    image: "/works/truewallet-voucher-api.png",
    tags: ["Golang", "Fiber", "Docker"],
    link: "https://github.com/jumpogpo/golang-truewallet-api",
  },
];

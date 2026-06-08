"use client";

import WorkCard from "@/components/work-card";
import { worksData } from "@/data/works";
import { motion } from "framer-motion";

export default function Works() {
  const data = worksData;

  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-8 max-w-[1600px] mx-auto px-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold">My Works</h1>

      {/* Grid Layout - 3 cards per row on desktop, 2 on tablet, 1 on mobile */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((work, index: number) => (
          <motion.div
            key={work.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 0.4,
              bounce: 0.1,
              delay: index * 0.05,
            }}
          >
            <WorkCard
              title={work.title}
              description={work.description}
              image={work.image}
              tags={work.tags}
              link={work.link}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

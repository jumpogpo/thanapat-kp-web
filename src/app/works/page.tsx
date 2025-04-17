import WorkCard from "@/components/work-card";
import type { WorksType } from "@/data/works";
import { worksData } from "@/data/works";

async function getWorksData(): Promise<WorksType[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/works`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch works data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data from API:", error);
    return worksData;
  }
}

export default async function Works() {
  const data: WorksType[] = await getWorksData();

  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-8 max-w-[1600px] mx-auto px-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold">My Works</h1>

      {/* Grid Layout - 3 cards per row on desktop, 2 on tablet, 1 on mobile */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((work) => (
          <WorkCard
            key={work.title}
            title={work.title}
            description={work.description}
            image={work.image}
            tags={work.tags}
            link={work.link}
          />
        ))}
      </div>
    </div>
  );
}

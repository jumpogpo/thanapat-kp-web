import WorkCard from "@/components/work-card";
import { worksData } from "@/data/works";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export default function Works() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-12 pt-14">
      {/* Heading */}
      <Reveal className="flex flex-col items-center gap-2 text-center">
        <span className="eyebrow">Portfolio</span>
        <h1 className="text-2xl font-bold tracking-tight">My Works</h1>
        <p className="max-w-md text-sm text-theme-secondary">
          A selection of projects I&apos;ve designed, built, and shipped.
        </p>
      </Reveal>

      {/* Grid - 3 per row on desktop, 2 on tablet, 1 on mobile */}
      <Stagger
        className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        gap={0.07}
      >
        {worksData.map((work) => (
          <StaggerItem key={work.title} hoverLift className="group h-full">
            <WorkCard
              title={work.title}
              description={work.description}
              image={work.image}
              tags={work.tags}
              link={work.link}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills/skills";
import { experienceData } from "@/data/experiences";
import { aboutData } from "@/data/about";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <div className="max-w-[600px] mx-auto pt-13 flex flex-col items-center gap-10 px-6">
      <About data={aboutData} />
      <Experience data={experienceData} />
      <Skills data={skills} />
    </div>
  );
}

import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills/skills";
import { experienceData } from "@/data/experiences";
import { aboutData } from "@/data/about";
import { skills } from "@/data/skills";

type ApiResponse = {
  about: typeof aboutData;
  skills: typeof skills;
  experiences: typeof experienceData;
};

async function getAboutData(): Promise<ApiResponse> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/about`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch about data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data from API:", error);
    return {
      about: aboutData,
      skills: skills,
      experiences: experienceData,
    };
  }
}

export default async function Home() {
  const data: ApiResponse = await getAboutData();

  return (
    <div className="max-w-[600px] mx-auto pt-13 flex flex-col items-center gap-10 px-6">
      <About data={data.about} />
      <Experience data={data.experiences} />
      <Skills data={data.skills} />
    </div>
  );
}

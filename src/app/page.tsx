import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[640px] flex-col gap-16 px-6 pb-10 pt-14">
      <About />
      <Experience />
      <Skills />
    </div>
  );
}

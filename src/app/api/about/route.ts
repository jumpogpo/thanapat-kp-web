import { skills } from "@/data/skills";
import { experienceData } from "@/data/experiences";
import { aboutData } from "@/data/about";
import { NextResponse } from "next/server";

type AboutAPIResponse = {
  about: typeof aboutData;
  skills: typeof skills;
  experiences: typeof experienceData;
};

export async function GET() {
  const responseData: AboutAPIResponse = {
    about: aboutData,
    skills: skills,
    experiences: experienceData,
  };

  return NextResponse.json(responseData);
}

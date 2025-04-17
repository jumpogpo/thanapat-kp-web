import { NextResponse } from "next/server";
import { worksData, WorksType } from "@/data/works";

export async function GET() {
  const responseData: WorksType[] = worksData
  return NextResponse.json(responseData);
}

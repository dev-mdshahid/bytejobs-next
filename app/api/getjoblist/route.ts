import { jobsCollection } from "@/lib/mongoClient";
import { NextResponse } from "next/server";

export async function GET() {
  const jobCursor = jobsCollection.find({});
  const joblist = await jobCursor.toArray();
  return NextResponse.json({ data: joblist });
}

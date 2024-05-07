import { jobsCollection, userJobsCollection } from "@/lib/mongoClient";
import { ObjectId } from "mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const jobId = searchParams.get("jobId");

  if (jobId) {
    const jobDetails = await userJobsCollection.findOne({
      _id: new ObjectId(jobId),
    });
    if (jobDetails) {
      return NextResponse.json({ okay: true, data: jobDetails });
    } else {
      return NextResponse.json({
        okay: false,
        message: "No job found for this id!",
        data: {},
      });
    }
  }
  return NextResponse.json({
    okay: false,
    message: "No jobId found!",
    data: {},
  });
}

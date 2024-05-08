import { userJobsCollection } from "@/lib/mongoClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const userEmail = searchParams.get("email");

  try {
    const posts = await userJobsCollection
      .find({ postedBy: userEmail })
      .toArray();
    return NextResponse.json({
      ok: true,
      data: posts,
    });
  } catch (error) {
    console.log(error);
  }
}

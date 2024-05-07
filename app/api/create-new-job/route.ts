import { userJobsCollection } from "@/lib/mongoClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const postData = await req.json();

  try {
    const insertedRes = await userJobsCollection.insertOne(postData);
    if (insertedRes.insertedId) {
      return NextResponse.json({
        ok: true,
      });
    } else {
      return NextResponse.json({
        ok: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

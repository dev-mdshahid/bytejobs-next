import {
  fulltimeJobCollection,
  internshipCollection,
  parttimeJobCollection,
  userJobsCollection,
} from "@/lib/mongoClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const postData = await req.json();

  let insertedRes;
  try {
    if (postData.type === "internship") {
      insertedRes = await internshipCollection.insertOne(postData);
    } else if (postData.type === "full time") {
      insertedRes = await fulltimeJobCollection.insertOne(postData);
    } else {
      insertedRes = await parttimeJobCollection.insertOne(postData);
    }
    const globalInsertedRes = await userJobsCollection.insertOne(postData);
    if (insertedRes.insertedId && globalInsertedRes.insertedId) {
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

import { userJobsCollection } from "@/lib/mongoClient";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { list }: { list: string[] } = await req.json();

  const listInObjectId = list.map((id) => new ObjectId(id));

  try {
    const posts = await userJobsCollection
      .find({
        _id: {
          $in: listInObjectId,
        },
      })
      .toArray();
    return NextResponse.json({
      ok: true,
      data: posts,
    });
  } catch (error) {
    console.log(error);
  }
}

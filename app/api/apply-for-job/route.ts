import { userJobsCollection, usersCollection } from "@/lib/mongoClient";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { jobId, userEmail } = await req.json();

  try {
    const jobUpdatedRes = await userJobsCollection.updateOne(
      {
        _id: new ObjectId(jobId),
      },
      {
        $addToSet: {
          applied: userEmail,
        },
      },
    );

    if (jobUpdatedRes.modifiedCount) {
      const profileUpdatedRes = await usersCollection.updateOne(
        {
          email: userEmail,
        },
        {
          $addToSet: {
            applied: jobId,
          },
        },
      );
      if (profileUpdatedRes.modifiedCount) {
        return NextResponse.json({
          ok: true,
        });
      } else {
        return NextResponse.json({
          ok: false,
        });
      }
    } else {
      return NextResponse.json({
        ok: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

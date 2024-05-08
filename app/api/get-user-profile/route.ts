import { usersCollection } from "@/lib/mongoClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const userEmail = searchParams.get("email");

  try {
    const userRes = await usersCollection.findOne({ email: userEmail });
    if (userRes) {
      delete userRes["password"];
      return NextResponse.json({
        ok: true,
        data: userRes,
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

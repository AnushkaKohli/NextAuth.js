import { NextResponse } from "next/server";
import connectMongoDB from "@/utils/mongodb";
import User from "@/models/User";

export const POST = async (request: any) => {
  try {
    const { email } = await request.json();
    await connectMongoDB();

    const existingUser = await User.findOne({ email }).select("_id");
    if (!existingUser) {
      return new NextResponse("User does not exist");
    }
    return new NextResponse(existingUser, { status: 200 });
  } catch (error) {
    return new NextResponse((error as Error).message, { status: 500 });
  }
};

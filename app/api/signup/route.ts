import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectMongoDB from "@/utils/mongodb";
import User from "@/models/User";

export const POST = async (request: any) => {
  try {
    const { name, email, password } = await request.json();
    await connectMongoDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ name, email, password: hashedPassword });
    try {
      await user.save();
      return NextResponse.json(
        { message: "User created successfully" },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json(
        { error: (error as Error).message },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};

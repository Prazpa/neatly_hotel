import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const { email, username, password } = formData;

    if (!password || (!email && !username)) {
      return NextResponse.json(
        { message: "Email/username and password are required" },
        { status: 400 }
      );
    }

    // Use `findFirst` with `OR` condition to handle both email and username
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email || "" }, // Handle empty email if not provided
          { username: username || "" } // Handle empty username if not provided
        ]
      }
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or username" },
        { status: 401 }
      );
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

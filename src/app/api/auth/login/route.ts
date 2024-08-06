import { NextRequest, NextResponse } from "next/server";
import pool from "@/config/config";
import { compare } from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    const { email, password } = formData;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 },
      );
    }

    const result = await pool.query(
      "SELECT password FROM users WHERE email = $1",
      [email]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }

    const isMatch = await compare(password, result.rows[0].password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

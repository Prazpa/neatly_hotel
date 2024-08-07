import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.startsWith("multipart/form-data")) {
      return NextResponse.json(
        { message: "Invalid content type" },
        { status: 400 }
      );
    }

    const formData = await req.formData();
    const fullname = formData.get("fullname") as string;
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const idNumber = formData.get("id_number") as string;
    const dob = formData.get("dob") as string;
    const country = formData.get("country") as string;
    const cardNumber = formData.get("card_number") as string;
    const cardOwner = formData.get("card_owner") as string;
    const expiryDate = formData.get("expiry_date") as string;
    const cvc = formData.get("cvc") as string;

    if (
      !fullname ||
      !username ||
      !email ||
      !password ||
      !idNumber ||
      !dob ||
      !country ||
      !cardNumber ||
      !cardOwner ||
      !expiryDate ||
      !cvc
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        fullname,
        username,
        email,
        password: hashedPassword,
        id_number: idNumber,
        dob: new Date(dob),
        country,
        card_number: cardNumber,
        card_owner: cardOwner,
        expiry_date: new Date(expiryDate),
        cvc
      }
    });

    return NextResponse.json(
      { message: "Registration successful", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import brcryp from "bcrypt";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const userFoundByEmail = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userFoundByEmail) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        {
          status: 400,
        }
      );
    }

    const userFoundByUsername = await prisma.user.findUnique({
      where: {
        username: data.username,
      },
    });

    if (userFoundByUsername) {
      return NextResponse.json(
        {
          message: "Username already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPass = await brcryp.hash(data.password, 10);

    const newUser = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPass,
      },
    });

    const { password: _, ...user } = newUser;

    console.log(user);

    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}

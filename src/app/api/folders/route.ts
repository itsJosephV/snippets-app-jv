import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions)
  try {
    const userFolders = await prisma.section.findMany({
      where: {
        userId: session?.user.id
      },
      include: {
        folders: {
          include: {
            snippets: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });
    return NextResponse.json(userFolders);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error getting data" }, { status: 500 });
  }
}

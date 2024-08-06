import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { folderId: string } }
) {
  try {
    const sectionId = params.folderId;
    if (!params.folderId) {
      return NextResponse.json(
        { error: "folder ID is required" },
        { status: 400 }
      );
    }

    const snippetsArr = await prisma.snippet.findMany({
      where: {
        folder: {
          id: sectionId,
        },
      },
      // orderBy: {
      //   createdAt: "desc"
      // },
      // include: {
      //   snippets: true,
      // },
    });
    return NextResponse.json(snippetsArr);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error getting data" }, { status: 500 });
  }
}

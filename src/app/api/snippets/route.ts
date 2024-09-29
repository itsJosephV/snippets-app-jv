import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const folderId = req.nextUrl.searchParams.get("folderId");

    if (!folderId) {
      return NextResponse.json(
        { error: "folder ID is required" },
        { status: 400 }
      );
    }

    const folder = await prisma.folder.findUnique({
      where: { id: folderId },
      include: {
        snippets: true,
      },
    });

    if (!folder) {
      return NextResponse.json({ error: "Folder not found" }, { status: 404 });
    }

    return NextResponse.json(folder);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error getting data" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, syntax, content, description, folderId } = await req.json();

    const newSnippet = await prisma.snippet.create({
      data: {
        title,
        syntax,
        content,
        description,
        folder: {
          connect: { id: folderId },
        },
      },
    });
    return NextResponse.json(newSnippet);
  } catch (error) {
    console.error('Error creating snippet:', error);
    return NextResponse.json({ error: 'Error creating snippet' }, { status: 500 });
  }
}
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

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
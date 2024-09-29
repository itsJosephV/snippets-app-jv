"use server";

import prisma from "@/lib/db";
import { revalidatePath, revalidateTag } from "next/cache";
import { onSession } from "./session";

export const createSection = async (formData: FormData) => {
  const sectionName = formData.get("section-name");
  const { user } = await onSession()
  await prisma.section.create({
    data: {
      title: sectionName as string,
      user: {
        connect: {
          email: user.email,
        }
      },
    },
  })
  revalidatePath("/dashboard")
};

export const deleteSection = async (sectionId: string) => {
  await onSession()
  await prisma.section.delete({
    where: {
      id: sectionId as string
    }
  })
  revalidatePath("/dashboard")
}

export const createFolder = async (formData: FormData) => {
  const folderName = formData.get("folder-name");
  const sectionId = formData.get("section-id");
  await onSession()
  await prisma.folder.create({
    data: {
      title: folderName as string,
      section: {
        connect: {
          id: sectionId as string
        }
      }
    },
  })
  revalidatePath("/dashboard")
};

export const createSnippet = async (folderId: string, formData: FormData) => {
  const title = formData.get("snippet-title")
  const syntax = formData.get("snippet-syntax")
  const description = formData.get("snippet-description")
  const content = `const hello = console.log("hello")`
  await onSession()
  await prisma.snippet.create({
    data: {
      title: title as string,
      syntax: syntax as string,
      description: description as string,
      content: content as string,
      folder: {
        connect: {
          id: folderId
        }
      }
    }
  })
  revalidatePath("/dashboard")
}
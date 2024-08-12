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
  // revalidateTag("folders")
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
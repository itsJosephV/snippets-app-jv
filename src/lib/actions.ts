"use server";

import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
export const createCollection = async (formData: FormData) => {
  const collectionName = formData.get("collection-name");

  if (typeof collectionName !== 'string') {
    throw new Error("Invalid input")
  }

  const session = await getServerSession()

  if (!session || !session.user || !session.user.email) {
    throw new Error("Not authenticated")
  }

  await prisma.collection.create({
    data: {
      title: collectionName as string,
      user: {
        connect: {
          email: session.user.email,
        }
      },
    },
    // include: {
    //   sections: true,
    // },

  })
  revalidatePath("/dashboard")
};

export const deleteCollection = async (formData: FormData) => {
  const collectionId = formData.get("collection-id");

  const session = await getServerSession()

  if (!session || !session.user || !session.user.email) {
    throw new Error("Not authenticated")
  }

  await prisma.collection.delete({
    where: {
      id: collectionId as string
    }
  })
  revalidatePath("/dashboard")

}

export const createSection = async (formData: FormData) => {
  const sectionName = formData.get("section-name");
  const collectionId = formData.get("collection-id");

  if (typeof sectionName !== 'string') {
    throw new Error("Invalid input")
  }

  if (typeof sectionName !== 'string') {
    throw new Error("Invalid input")
  }

  const session = await getServerSession()

  if (!session || !session.user || !session.user.email) {
    throw new Error("Not authenticated")
  }

  await prisma.section.create({
    data: {
      title: sectionName as string,
      collection: {
        connect: {
          id: collectionId as string
        }
      }
    },
  })
  revalidatePath("/dashboard")
};
"use server";

import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
export const createCollection = async (formData: FormData) => {
  const collectionName = formData.get("collection-name");

  if (typeof collectionName !== 'string') {
    throw new Error("Invalid input")
  }

  const session = await getServerSession()

  console.log(session);

  if (!session || !session.user || !session.user.email) {
    throw new Error("Not authenticated")
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email
    }
  })

  if (!user) {
    throw new Error("User not found")
  }

  const newCollection = await prisma.collection.create({
    data: {
      title: collectionName,
      user: {
        connect: { id: user.id }
      }
    }
  })
  console.log(newCollection);

  return newCollection

};
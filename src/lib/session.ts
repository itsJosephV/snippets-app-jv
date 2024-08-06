"use server"

import { getServerSession } from "next-auth"

export async function onSession() {
  const session = await getServerSession()

  if (!session || !session.user || !session.user.email) {
    throw new Error("Not authenticated")
  }

  return session
}
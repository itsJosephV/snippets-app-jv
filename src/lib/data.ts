import { getServerSession } from "next-auth";
import prisma from "./db";

export async function getCollections() {
  const session = await getServerSession()

  const collection = await prisma.user.findUnique({

    where: {
      email: session?.user.email
    },
    include: {
      collection: {
        include: {
          sections: {
            include: {
              folders: true
            }
          }
        }
      }
    }
  });
  return collection;
}
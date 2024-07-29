"use server";

import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
export const createSection = async (formData: FormData) => {
  const sectionName = formData.get("section-name");

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

export const deleteSection = async (formData: FormData) => {
  const sectionId = formData.get("section-id");

  const session = await getServerSession()

  if (!session || !session.user || !session.user.email) {
    throw new Error("Not authenticated")
  }

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

  if (typeof folderName !== 'string') {
    throw new Error("Invalid input")
  }
  const session = await getServerSession()

  if (!session || !session.user || !session.user.email) {
    throw new Error("Not authenticated")
  }

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


// export const addNewSnippet = async (formData: FormData) => {
//   const snippetTitle = formData.get("snippet-title");
//   const snippetSyntax = formData.get("snippet-syntax");

//   if (typeof snippetTitle !== 'string') {
//     throw new Error("Invalid input")
//   }

//   if (typeof snippetSyntax !== 'string') {
//     throw new Error("Invalid input")
//   }

//   const session = await getServerSession()

//   if (!session || !session.user || !session.user.email) {
//     throw new Error("Not authenticated")
//   }

//   await prisma.snippet.create({
//     data: {
//       title: snippetTitle as string,
//       syntax: snippetSyntax as string,
//       folder: {
//         connect: {
//           id: 
//         }
//       }
//     },
//     // include: {
//     //   sections: true,
//     // },

//   })
// revalidatePath("/dashboard")
// };
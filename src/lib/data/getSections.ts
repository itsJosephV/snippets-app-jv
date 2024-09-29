'use server'
import prisma from '../db';

export async function getSections(id: string) {
  const userAndSections = await prisma.section.findMany({
    where: {
      userId: id
    },
    include: {
      folders: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return userAndSections
}


// function getSnippets() {
//   return {
//     include: {
//       snippets: true
//     }
//   }
// }
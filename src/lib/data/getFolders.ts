import prisma from '../db';

export async function getFolders(id: string) {
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
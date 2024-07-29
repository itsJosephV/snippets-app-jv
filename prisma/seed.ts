import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// Define the folder initialization object
const folderSnippetsInit: Prisma.FolderCreateInput[] = [{
  id: "2364382764328746328",
  title: "init folder",
  section: {
    connect: {
      id: "cd0396ac-7036-4f72-b72e-42306a4b2c0d"
    }
  },
  snippets: {
    createMany: {
      data: [
        {
          id: "42342343232",
          title: "init snippet",
          content: `console.log("Hello world 2")`,
          syntax: "javascript",
        },
        {
          id: "4353454366",
          title: "init snippet",
          content: `console.log("Hello world 2")`,
          syntax: "javascript",
        },
        {
          id: "123123123",
          title: "init snippet",
          content: `console.log("Hello world 2")`,
          syntax: "javascript",
        }
      ]
    }
  }
}];

async function main() {
  console.log('Start seeding...');

  for (const folder of folderSnippetsInit) {
    const newFolder = await prisma.folder.create({
      data: folder
    });
    console.log(`Created folder with id: ${newFolder.id}`);
  }
  console.log('Seeding finished');
}

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.log(e);
  await prisma.$disconnect();
  process.exit(1);
});
import prisma from './db';

export async function getCurrentUserSections(email: string) {
  const userAndSections = await prisma.user.findUnique({
    where: { email },
    include: {
      sections: includeSectionsDetails()
    },
  });

  return {
    id: userAndSections?.id,
    name: userAndSections?.username,
    email: userAndSections?.email,
    sections: userAndSections?.sections
  }
}

function includeSectionsDetails() {
  return {
    include: {
      folders: includeFolderDetails()
    }
  };
}

function includeFolderDetails() {
  return {
    include: {
      snippets: true
    }
  };
}
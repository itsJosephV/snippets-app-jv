export type Snippet = {
  id: string;
  title: string;
  content: string;
  description?: string,
  syntax: string;
  folderId: string,
  folder: {
    title: string
  }
  createdAt: Date
};

export type Folder = {
  id: string;
  title: string;
  snippets?: Snippet[];
  sectionId: string | null
  createdAt: Date
};

/**
 * folder: { title: 'folder2' }
 */

export type Section = {
  id: string;
  title: string;
  folders: Folder[];
  userId: string
  createdAt: Date
};

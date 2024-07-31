import { create } from "zustand";

export type Snippet = {
  id: string;
  title: string;
  content: string;
  syntax: string;
};

export type Folder = {
  id: string;
  title: string;
  snippets: Snippet[];
  sectionId: string
};

export type Section = {
  id: string;
  title: string;
  folders: Folder[];
};

type SnippetsStore = {
  currentFolder: Folder;
  currentSnippet: Snippet;
  setCurrentFolder: (section: Folder) => void;
  setCurrentSnippet: (snippet: Snippet) => void;
  // folders: Folder[];
  // MergeSnippetIntoFolder: (snippet: Snippet) => void
  // addSnippetToFolder: (folderId: string, snippet: Snippet) => void
};

export const defaultFolder: Folder = {
  id: "",
  title: "",
  sectionId: "",
  snippets: []
};

export const defaultSnippet: Snippet = {
  id: "",
  title: "",
  content: "",
  syntax: ""
}

export const useSnippetsStore = create<SnippetsStore>((set) => ({
  currentFolder: defaultFolder,
  currentSnippet: defaultSnippet,
  setCurrentFolder: (folder) => set({ currentFolder: folder }),
  setCurrentSnippet: (snippet) => set({ currentSnippet: snippet }),
  // folders: [],
  // addSnippetToFolder: (folderId, snippet) => set((state) => ({
  //   folders: state.folders.map((folder) =>
  //     folder.id === folderId ? { ...folder, snippets: [...folder.snippets, snippet] } : folder
  //   ),
  // })),
}));
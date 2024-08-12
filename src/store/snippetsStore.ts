
import { create } from "zustand";

export type Snippet = {
  id: string;
  title: string;
  content: string;
  description?: string,
  syntax: string;
  createdAt: Date
};

export type Folder = {
  id: string;
  title: string;
  snippets?: Snippet[];
  sectionId: string | null
  createdAt: Date
};

export type Section = {
  id: string;
  title: string;
  folders: Folder[];
  userId: string
  createdAt: Date
};

type SnippetsStore = {
  currentFolder: Folder;
  currentSnippet: Snippet;
  setCurrentFolder: (section: Folder) => void;
  setCurrentSnippet: (snippet: Snippet) => void;
};

export const defaultFolder: Folder = {
  id: "",
  title: "",
  sectionId: "",
  snippets: [],
  createdAt: new Date()
};

export const defaultSnippet: Snippet = {
  id: "",
  title: "",
  content: "",
  description: "",
  syntax: "",
  createdAt: new Date()
}

export const useSnippetsStore = create<SnippetsStore>((set) => ({
  currentFolder: defaultFolder,
  currentSnippet: defaultSnippet,
  setCurrentFolder: (folder) => set({ currentFolder: folder }),
  setCurrentSnippet: (snippet) => set({ currentSnippet: snippet }),
}));
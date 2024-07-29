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
};

type CurrentFolder = {
  id: string;
  title: string;
  snippets: Snippet[];
  folders: Folder[]; // Add folders if they are part of CurrentFolder
};

type SnippetsStore = {
  currentFolder: CurrentFolder;
  currentSnippet: Snippet
  setCurrentFolder: (folder: CurrentFolder) => void;
  setCurrentSnippet: (snippet: Snippet) => void;
};

const defaultFolder: CurrentFolder = {
  id: "",
  title: "",
  snippets: [],
  folders: [] // Initialize with an empty array
};

const defaultSnippet: Snippet = {
  id: "",
  title: "",
  content: "",
  syntax: ""
}

export const useSnippetsStore = create<SnippetsStore>((set) => ({
  currentFolder: defaultFolder,
  currentSnippet: defaultSnippet,
  setCurrentFolder: (folder) => set({ currentFolder: folder }),
  setCurrentSnippet: (snippet) => set({ currentSnippet: snippet })
}));
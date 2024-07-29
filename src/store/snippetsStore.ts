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

export type Section = {
  id: string;
  title: string;
  folders: Folder[];
};

type SnippetsStore = {
  currentSection: Section;
  currentSnippet: Snippet;
  setCurrentSection: (section: Section) => void;
  setCurrentSnippet: (snippet: Snippet) => void;
};

const defaultSection: Section = {
  id: "",
  title: "",
  folders: []
};

const defaultSnippet: Snippet = {
  id: "",
  title: "",
  content: "",
  syntax: ""
}

export const useSnippetsStore = create<SnippetsStore>((set) => ({
  currentSection: defaultSection,
  currentSnippet: defaultSnippet,
  setCurrentSection: (section) => set({ currentSection: section }),
  setCurrentSnippet: (snippet) => set({ currentSnippet: snippet })
}));
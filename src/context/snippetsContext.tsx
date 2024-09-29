"use client";
import { Snippet } from "@/types";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type SnippetsContextProps = {
  currentSnippet: Snippet;
  setCurrentSnippet: Dispatch<SetStateAction<Snippet>>;
};

export const DEFAULT_SNIPPET = {
  id: "",
  title: "",
  content: "",
  description: "",
  syntax: "",
  folderId: "",
  folder: { title: "" },
  createdAt: new Date(),
};

export const SnippetsContext = createContext<SnippetsContextProps | null>(null);

const SnippetsProvider = ({ children }: { children: ReactNode }) => {
  const [currentSnippet, setCurrentSnippet] =
    useState<Snippet>(DEFAULT_SNIPPET);

  return (
    <SnippetsContext.Provider value={{ currentSnippet, setCurrentSnippet }}>
      {children}
    </SnippetsContext.Provider>
  );
};

export default SnippetsProvider;

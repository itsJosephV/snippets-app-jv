"use client";
import SnippetsHeader from "./SnippetsHeader";
import Search from "./Search";
import { Snippet, useSnippetsStore } from "@/store/snippetsStore";
import SnippetCard from "./SnippetCard";

export const Snippets = () => {
  const currentFolder = useSnippetsStore((state) => state.currentFolder);

  return (
    <div className="border-r h-screen grid grid-rows-[auto_1fr]">
      <div>
        <SnippetsHeader title={currentFolder?.title} />
        <div className="p-2 px-3 border-b  flex items-center">
          <Search />
        </div>
      </div>
      {currentFolder.snippets && currentFolder?.snippets.length < 1 && (
        <p>No snippets found</p>
      )}
      <ul className="p-2.5 h-full overflow-y-scroll">
        {currentFolder?.snippets
          ?.sort((a, b) => {
            const dateA = new Date(a.createdAt as string).getTime();
            const dateB = new Date(b.createdAt as string).getTime();
            return dateB - dateA;
          })
          .map((snippet: Snippet) => (
            <SnippetCard key={snippet.id} snippet={snippet} />
          ))}
      </ul>
    </div>
  );
};

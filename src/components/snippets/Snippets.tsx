"use client";
import SnippetsHeader from "./SnippetsHeader";
import Search from "./Search";
import SnippetCard from "./SnippetCard";
import { Folder, Snippet, useSnippetsStore } from "@/store/snippetsStore";

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
      <ul className="space-y-3 pt-5 p-2.5 h-full overflow-y-scroll">
        {currentFolder?.snippets?.map((snippet: Snippet) => {
          return <SnippetCard key={snippet.id} snippet={snippet} />;
        })}
      </ul>
    </div>
  );
};
//

import React from "react";
import SnippetCard from "./SnippetCard";
import { getSnippets } from "@/lib/data/getSnippets";
import { Snippet } from "@/types";

const SnippetsList = async ({ folderId }: { folderId: string }) => {
  const { snippets } = await getSnippets(folderId);
  return (
    <>
      {snippets && snippets?.length < 1 && (
        <p className="p-3">No snippets found</p>
      )}
      <ul className="p-2.5 h-full overflow-y-scroll">
        {snippets
          ?.sort((a: Snippet, b: Snippet) => {
            const dateA = new Date(a.createdAt as Date).getTime();
            const dateB = new Date(b.createdAt as Date).getTime();
            return dateB - dateA;
          })
          .map((snippet: Snippet) => (
            <SnippetCard key={snippet.id} snippet={snippet} />
          ))}
      </ul>
    </>
  );
};

export default SnippetsList;

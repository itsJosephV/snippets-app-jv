"use server";
import SnippetsHeader from "./SnippetsHeader";
import Search from "./Search";
import SnippetsList from "./SnippetsList";
import { Suspense } from "react";
import { getSnippets } from "@/lib/data/getSnippets";

export const SnippetsColumn = async ({ folderId }: { folderId: string }) => {
  const { title } = await getSnippets(folderId);
  return (
    <section className="border-r h-screen grid grid-rows-[auto_1fr]">
      <div>
        <SnippetsHeader folderId={folderId} title={title} />
        <div className="p-2 px-3 border-b  flex items-center">
          <Search />
        </div>
      </div>
      <Suspense
        key={folderId}
        fallback={<p className="w-[250px] p-3">loading...</p>}
      >
        <SnippetsList folderId={folderId} />
      </Suspense>
    </section>
  );
};

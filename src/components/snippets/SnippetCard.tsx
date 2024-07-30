// import { Snippet } from "@prisma/client";
import { Code2 } from "lucide-react";
import React from "react";
import { useSnippetsStore, type Snippet } from "@/store/snippetsStore";

const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  const setSnippet = useSnippetsStore((state) => state.setCurrentSnippet);

  return (
    <li
      onClick={() => setSnippet(snippet)}
      className="sc-list p-3 flex gap-1 flex-col"
    >
      <div className="space-y-1">
        <h3 className="capitalize text-zinc-900 font-medium">
          {snippet.title}
        </h3>
        <p className="text-zinc-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nobis?
        </p>
      </div>
      <ul className="flex gap-1.5">
        {["Blog", "Data", "Algo"].map((tag) => {
          return (
            <li key={tag}>
              <p className="bg-violet-100 px-1.5 rounded-sm text-sm text-violet-900">
                {tag}
              </p>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-between items-center mt-2">
        <p className="text-sm text-zinc-400 flex items-center gap-1">
          <Code2 size={16} /> {"Folder Title"}
        </p>
        <time className="text-sm text-zinc-400">30/07/24</time>
      </div>
      {/* </div> */}
    </li>
  );
};

export default SnippetCard;

"use client";
import { Code2 } from "lucide-react";
import useSnippetsContext from "@/context/useSnippetsContext";
import { Snippet } from "@/types";

const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  const { setCurrentSnippet } = useSnippetsContext();
  return (
    <li
      onClick={() => {
        setCurrentSnippet(snippet);
      }}
      className="sc-list p-3 flex gap-1 flex-col"
    >
      <div className="space-y-1">
        <h3 className="capitalize text-zinc-900 font-medium">
          {snippet.title}
        </h3>
        <p className="text-zinc-500">
          {snippet.description ? snippet.description : "Add a description"}
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
          <Code2 size={16} /> {"Section Title"}
        </p>
        <time className="text-sm text-zinc-400">
          {new Date(snippet.createdAt).toLocaleDateString("en-US")}
        </time>
      </div>
    </li>
  );
};

export default SnippetCard;

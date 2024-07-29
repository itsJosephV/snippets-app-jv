// import { Snippet } from "@prisma/client";
import { Code } from "lucide-react";
import React from "react";
import { useSnippetsStore, type Snippet } from "@/store/snippetsStore";

const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  const setSnippet = useSnippetsStore((state) => state.setCurrentSnippet);

  return (
    <li>
      <div
        onClick={() => setSnippet(snippet)}
        className="bg-violet-100 rounded-md p-2 flex items-center gap-3"
      >
        <div className="bg-green-100">
          <Code size={18} />
        </div>
        <div className="space-y-2">
          <p className="bg-green-100">{snippet.title}</p>
          <p className="bg-green-100">Description</p>
        </div>
        {/* <ul className="flex gap-2">
          {snippet?.tags?.map((tag: any, i: any) => {
            return (
              <li key={i}>
                <small className="bg-orange-100">{tag.content}</small>
              </li>
            );
          })}
        </ul> */}
      </div>
    </li>
  );
};

export default SnippetCard;

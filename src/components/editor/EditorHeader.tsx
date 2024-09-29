import { Snippet } from "@/types";
import React from "react";
import { Info, Share, Star, Trash, Trash2 } from "lucide-react";

const EditorHeader = ({ currentSnippet }: { currentSnippet: Snippet }) => {
  return (
    <div className="bg-blue-50 p-2 px-3 border-b flex items-center h-16">
      <div className="flex-1 flex  flex-col">
        <p>{currentSnippet?.title}</p>
        <small>{currentSnippet?.syntax}</small>
        {/**TODO: TAGS HERE */}
      </div>
      <div className="flex items-center gap-3.5">
        <button>
          <Info size={20} />
        </button>
        <button>
          <Star size={20} />
        </button>
        <button>
          {" "}
          <Share size={20} />
        </button>
        <button>
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default EditorHeader;

import { PanelLeftClose, Pencil } from "lucide-react";
import React from "react";

const SnippetsHeader = ({ title }: { title: string }) => {
  return (
    <div className="border-b bg-blue-50 flex items-center justify-between px-3 h-16">
      <div className="flex items-center gap-1.5">
        <button className="flex items-center">
          <PanelLeftClose size={20} />
        </button>
        <p className="text-zinc-600">{title}</p>
      </div>
      <button>
        <Pencil size={20} />
      </button>
    </div>
  );
};

export default SnippetsHeader;

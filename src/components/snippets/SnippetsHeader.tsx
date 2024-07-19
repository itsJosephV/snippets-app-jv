import { PanelLeftClose, Pencil } from "lucide-react";
import React from "react";

const SnippetsHeader = () => {
  return (
    <div className="border-b bg-blue-50 flex items-center justify-between px-3 h-16">
      <button>
        <PanelLeftClose size={20} />
      </button>
      <button>
        <Pencil size={20} />
      </button>
    </div>
  );
};

export default SnippetsHeader;

import { PanelLeftClose, Pencil } from "lucide-react";
import React from "react";

const SnippetsHeader = () => {
  return (
    <div className="border-b bg-blue-50 flex items-center justify-between p-3 h-16">
      <button>
        <PanelLeftClose size={18} />
      </button>
      <button>
        <Pencil size={18} />
      </button>
    </div>
  );
};

export default SnippetsHeader;

import { PanelLeftClose, Plus } from "lucide-react";
import React from "react";
import Modal from "../ui/modal/Modal";
import AddSnippetForm from "../forms/AddSnippetForm";
import { useSnippetsStore } from "@/store/snippetsStore";

const SnippetsHeader = ({ title }: { title: string }) => {
  const { id: folderId } = useSnippetsStore((state) => state.currentFolder);

  console.log(folderId);

  return (
    <div className="border-b bg-blue-50 flex items-center justify-between px-3 h-16">
      <div className="flex items-center gap-1.5">
        <button className="flex items-center">
          <PanelLeftClose size={20} />
        </button>
        <p className="text-zinc-600">{title}</p>
      </div>

      <Modal>
        <Modal.Trigger>
          <button className="bg-pink-100 p-1 rounded-md">
            <Plus size={20} />
          </button>
        </Modal.Trigger>
        <Modal.Content title="Add snippet">
          <AddSnippetForm folderId={folderId} />
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default SnippetsHeader;

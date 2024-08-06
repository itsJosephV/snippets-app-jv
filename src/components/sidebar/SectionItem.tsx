"use client";
import { ChevronDown, ChevronRight, CircleEllipsis, Plus } from "lucide-react";
import React, { useState } from "react";
import Modal from "../ui/modal/Modal";
import { Popover } from "../ui/popover/Popover";
import { type Folder, type Section } from "@/store/snippetsStore";
import NewFolderForm from "../forms/NewFolderForm";
import DeleteSectionForm from "../forms/DeleteSectionForm";
import { FolderItem } from "./FolderItem";

const SectionItem = ({ section }: { section: Section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <details onToggle={handleToggle} className="space-y-1.5">
      <summary className="font-normal bg-zinc-100 p-1.5 px-2 rounded-md flex items-center">
        <p className="flex-1 flex items-center gap-1">
          <span>
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
          {section.title}
        </p>
        <div className="flex gap-1">
          <Popover>
            <Popover.Trigger>
              <button className="bg-blue-100 p-1 rounded-md">
                <CircleEllipsis size={14} />
              </button>
            </Popover.Trigger>
            <Popover.Content>
              <div>
                <DeleteSectionForm sectionId={section.id} />
              </div>
            </Popover.Content>
          </Popover>
          <Modal>
            <Modal.Trigger>
              <button className="bg-blue-100 p-1 rounded-md">
                <Plus size={14} />
              </button>
            </Modal.Trigger>
            <Modal.Content title="new folder form">
              <NewFolderForm sectionId={section.id} />
            </Modal.Content>
          </Modal>
        </div>
      </summary>
      <ul className="space-y-1 pl-6">
        {section.folders.length < 1 && <p>No folders found</p>}
        {section.folders?.map((folder: Folder) => {
          return <FolderItem key={folder.id} folder={folder} />;
        })}
      </ul>
    </details>
  );
};

export default SectionItem;

"use client";
import {
  ChevronDown,
  ChevronRight,
  CircleEllipsis,
  Folder as FolderIcon,
  Plus,
} from "lucide-react";
import React, { useState } from "react";
import Modal from "../ui/modal/Modal";
import NewSectionForm from "../forms/NewSectionForm";
import { Popover } from "../ui/popover/Popover";
import DeleteCollectionForm from "../forms/DeleteCollectionForm";
import { type Section, useSnippetsStore } from "@/store/snippetsStore";
import { Collections } from "@/types";

const CollectionItem = ({ collection }: { collection: Collections }) => {
  const [isOpen, setIsOpen] = useState(false);

  const setSection = useSnippetsStore((state) => state.setCurrentSection);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <details onToggle={handleToggle} className="space-y-1.5">
      <summary className="font-medium bg-zinc-100 p-1.5 px-2 rounded-md flex items-center">
        <p className="flex-1 flex items-center gap-1">
          <span>
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>{" "}
          {collection.title}
        </p>{" "}
        <div className="flex gap-1">
          <Popover>
            <Popover.Trigger>
              <button className="bg-blue-100 p-1 rounded-md">
                <CircleEllipsis size={14} />
              </button>
            </Popover.Trigger>
            <Popover.Content>
              <div>
                <DeleteCollectionForm collectionId={collection.id} />
              </div>
            </Popover.Content>
          </Popover>
          <Modal>
            <Modal.Trigger>
              <button className="bg-blue-100 p-1 rounded-md">
                <Plus size={14} />
              </button>
            </Modal.Trigger>
            <Modal.Content title="new section form">
              <NewSectionForm collectionId={collection.id} />
            </Modal.Content>
          </Modal>
        </div>
      </summary>

      <ul className="space-y-1">
        {collection.sections?.map((section: Section) => {
          return (
            <li
              onClick={() => {
                setSection(section);
              }}
              key={section.id}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-2 py-1 pr-2 pl-6 bg-blue-50 rounded-md text-zinc-700">
                <span>
                  <FolderIcon size={14} />
                </span>
                <small>{section.title}</small>
              </div>
            </li>
          );
        })}
      </ul>
    </details>
  );
};

export default CollectionItem;

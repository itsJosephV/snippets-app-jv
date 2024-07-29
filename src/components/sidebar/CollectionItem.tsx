"use client";
import {
  ChevronDown,
  ChevronRight,
  CircleEllipsis,
  Folder,
  Plus,
} from "lucide-react";
import React, { useState } from "react";
import Modal from "../ui/modal/Modal";
import NewSectionForm from "../forms/NewSectionForm";
import { Popover } from "../ui/popover/Popover";
import DeleteCollectionForm from "../forms/DeleteCollectionForm";
import { useSnippetsStore } from "@/store/snippetsStore";

const CollectionItem = ({ collection }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const setFolder = useSnippetsStore((state) => state.setCurrentFolder);
  const folder = useSnippetsStore((state) => state.currentFolder);

  console.log(folder, "folder setting");
  // console.log(collection);

  // collection.sections.map((section) => console.log(section.folders));

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
                {/* <form action="">
                  <button className="bg-red-400 p-1 px-2 text-sm text-white rounded-md">
                    Delete
                  </button>
                </form> */}
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
        {collection.sections?.map((section: any, l: any) => {
          return (
            <li
              onClick={() => {
                setFolder(section);
                // console.log(section.title);
                console.log("clicked!");
              }}
              key={`${l}`}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-2 py-1 pr-2 pl-6 bg-blue-50 rounded-md text-zinc-700">
                <span>
                  <Folder size={14} />
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

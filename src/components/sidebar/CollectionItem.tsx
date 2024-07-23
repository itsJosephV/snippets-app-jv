"use client";
import {
  ChevronDown,
  ChevronRight,
  CircleEllipsis,
  Folder,
  Plus,
} from "lucide-react";
import React, { useState } from "react";

const CollectionItem = ({ collection, setCurrentSection }: any) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <button className="bg-blue-100 p-1 rounded-md">
            <CircleEllipsis size={14} />
          </button>
          <button className="bg-blue-100 p-1 rounded-md">
            <Plus size={14} />
          </button>
        </div>
      </summary>

      <ul className="space-y-1">
        {collection.sections.map((section: any, l: any) => {
          return (
            <li
              onClick={() => setCurrentSection(section)}
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

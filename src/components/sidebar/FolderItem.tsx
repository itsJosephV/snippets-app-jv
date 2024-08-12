import { useSnippetsStore, type Folder } from "@/store/snippetsStore";
// import { useQuery } from "@tanstack/react-query";
import { FolderIcon } from "lucide-react";
// import { useEffect, useState } from "react";
import { Spinner } from "../ui/extra/Spinner";
// import { getSnippets } from "@/lib/data/getSnippets";

export const FolderItem = ({ folder }: { folder: Folder }) => {
  const setCurrentFolder = useSnippetsStore((state) => state.setCurrentFolder);

  return (
    <li
      onClick={() => setCurrentFolder(folder)}
      className="flex cursor-pointer items-center py-1 pr-2  rounded-md text-zinc-700"
    >
      <div className="flex gap-1.5 items-center flex-1">
        <span>
          <FolderIcon color="violet" size={16} />
        </span>
        <p>{folder.title}</p>
      </div>
    </li>
  );
};

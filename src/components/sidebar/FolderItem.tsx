"use client";
import { DEFAULT_SNIPPET } from "@/context/snippetsContext";
import useSnippetsContext from "@/context/useSnippetsContext";
import { Folder } from "@/types";
import { FolderIcon } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const createUrl = (pathname: string, params: URLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const FolderItem = ({ folder }: { folder: Folder }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const folderSearchParams = new URLSearchParams(searchParams.toString());
  folderSearchParams.set("folderId", folder.id);

  const folderURL = createUrl(pathname, folderSearchParams);

  const { setCurrentSnippet } = useSnippetsContext();

  return (
    <li
      onClick={() => {
        router.push(folderURL);
        setCurrentSnippet(DEFAULT_SNIPPET);
      }}
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

"use client";
import { FoldersIcon, Star } from "lucide-react";
import SectionItem from "./SectionItem";
import { type Section } from "@/store/snippetsStore";
import { useSession } from "next-auth/react";
import { getSections } from "@/lib/data/getSections";
import { useQuery } from "@tanstack/react-query";

function Sections() {
  const { data: session } = useSession();

  const { data, error, isFetched } = useQuery({
    queryKey: ["sections"],
    queryFn: () => getSections(session?.user.id),
  });

  return (
    <div className="p-2.5 pt-5 space-y-6">
      {/**
       * USER - FAVORITES COLLECTIONS (ALL SNIPPETS - FAVORITE SNIPPETS)
       */}
      <ul className="space-y-3">
        <li>
          <p className="font-medium text-zinc-600 text-sm">Favorites</p>
        </li>
        {[
          { title: "All Snippets", icon: <FoldersIcon size={18} /> },
          { title: "Fav Snippets", icon: <Star size={18} /> },
        ].map((x: any, y: number) => {
          return (
            <li key={`${y}`} className="cursor-pointer">
              <div className="space-y-1.5 p-1.5 px-2 bg-zinc-100  rounded-md">
                <p className="font-normal flex items-center gap-1.5">
                  <span>{x.icon}</span> {x.title}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      {/**
       * USER - SECTIONS
       */}
      <ul className="space-y-3">
        <li>
          <p className="font-medium text-zinc-600 text-sm">Sections</p>
        </li>
        {data?.map((section) => {
          return (
            <li key={section.id} className="cursor-pointer">
              <SectionItem section={section as Section} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sections;

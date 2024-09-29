import { FoldersIcon, Star } from "lucide-react";
import SectionsList from "./SectionsList";
import { Suspense } from "react";

function Sections() {
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
        <Suspense fallback={<p>loading...</p>}>
          <SectionsList />
        </Suspense>
      </ul>
    </div>
  );
}

export default Sections;

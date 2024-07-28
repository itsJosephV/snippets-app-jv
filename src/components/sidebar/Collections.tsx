import { FoldersIcon, Star } from "lucide-react";
import CollectionItem from "./CollectionItem";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

function Collections({ collectionsData }: any) {
  // console.log(placeholders, "from Collections Component");
  // return data.map((item) => {
  // return <p key={item.id}>{item.title}</p>;

  // });
  console.log(collectionsData);

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
                <p className="font-medium flex items-center gap-1.5">
                  <span>{x.icon}</span> {x.title}
                </p>
                {/* <ul className="space-y-1">
                {collection.sections.map((section: any, l: any) => {
                  return (
                    <li
                      onClick={() => setCurrentSection(section)}
                      key={`${i}-${l}`}
                      className="cursor-pointer"
                    >
                      <div className="flex items-center gap-2 py-1 pr-2 pl-6 bg-pink-50 rounded-md text-zinc-700">
                        <span>
                          <Folder size={14} />
                        </span>
                        <small>{section.title}</small>
                      </div>
                    </li>
                  );
                })}
              </ul> */}
              </div>
            </li>
          );
        })}
      </ul>
      {/**
       * USER - COLLECTIONS
       */}
      <ul className="space-y-3">
        <li>
          <p className="font-medium text-zinc-600 text-sm">Collections</p>
        </li>
        {collectionsData?.collection?.map((collection: any, i: number) => {
          return (
            <li key={`${i}`} className="cursor-pointer">
              <CollectionItem
                collection={collection}
                // setCurrentSection={setCurrentSection}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Collections;

{
  /* {Array.from({ length: 30 }, (_, i) => {
        return (
          <details
            className="flex items-center gap-2 py-1 px-2 bg-pink-100"
            key={i}
          >
            <summary>testing</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              aperiam.
            </p>
          </details>
        );
      })} */
}

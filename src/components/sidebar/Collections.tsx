import {
  Folder,
  FoldersIcon,
  Plus,
  CircleEllipsis,
  Star,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import CollectionItem from "./CollectionItem";

const Collections = ({ setCurrentSection, placeholders }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="p-2.5 pt-5 space-y-6">
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
      {/* <li>
        <p className="font-medium text-zinc-600 text-sm">Collections</p>
      </li> */}
      <ul className="space-y-3">
        <li>
          <p className="font-medium text-zinc-600 text-sm">Collections</p>
        </li>
        {placeholders?.collections.map((collection: any, i: number) => {
          return (
            <li key={`${i}`} className="cursor-pointer">
              <CollectionItem
                collection={collection}
                setCurrentSection={setCurrentSection}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

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

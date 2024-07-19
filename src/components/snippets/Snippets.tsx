import SnippetsHeader from "./SnippetsHeader";
import Search from "./Search";
import SnippetCard from "./SnippetCard";

export const Snippets = ({ currentSection, setCurrentSnippet }: any) => {
  //console.log(currentSection);

  const handleSetSnippet = (snippet: any) => {
    setCurrentSnippet(snippet);
  };

  return (
    <div className="border-r h-screen grid grid-rows-[auto_1fr]">
      <div>
        <SnippetsHeader />
        <div className="p-2 border-b  flex items-center">
          <Search />
        </div>
      </div>
      <ul className="space-y-3 p-2.5 h-full overflow-y-scroll">
        {currentSection?.folders?.map((folder: any, i: number) => {
          return folder.snippets.map((itemx: any, x: number) => {
            return (
              <SnippetCard key={x} onClick={handleSetSnippet} itemx={itemx} />
            );
          });
        })}
      </ul>
    </div>
  );
};

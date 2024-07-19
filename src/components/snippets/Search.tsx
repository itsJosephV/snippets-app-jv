import { Search as InputSearch } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="flex items-center w-full bg-zinc-100 rounded-md p-1 px-2 gap-1">
      <InputSearch size={18} className="text-zinc-400" />
      <input
        className="w-full bg-zinc-100 outline-none"
        placeholder="Search"
        type="text"
      />
    </div>
  );
};

export default Search;

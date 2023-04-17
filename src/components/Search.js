import React from "react";
import icons from "../ultis/icons";
const { FiSearch } = icons;
const Search = () => {
  return (
    <div className="w-full flex bg-[#DDE4E4] rounded-[20px]">
      <span className="w-[40px] text-gray-500 text-[20px] flex items-center justify-center rounded-l-3xl">
        <FiSearch />
      </span>
      <input
        type="text"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        className="w-full outline-none  pr-4 py-2 h-[40px] bg-transparent text-gray-500 text-[14px]"
      />
    </div>
  );
};

export default Search;

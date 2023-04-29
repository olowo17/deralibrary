import React from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="border-2 self-center p-2 border-green-800 px-2 justify-center">
      <input
        type="text"
        id="search"
        placeholder="search by title or author"
        className="rounded-md  outline-none text-black"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;

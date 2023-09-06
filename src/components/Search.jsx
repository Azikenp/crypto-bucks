import React, { useContext, useState } from "react";
import debounce from 'lodash.debounce'
import searchIcon from "../assets/search.svg";
import { CryptoContext } from "../context/CryptoContext";

function Search() {
  const [searchText, setSearchText] = useState("");
  let {searchData, getSearchResults} = useContext(CryptoContext);

  const debounceFunc = debounce(function(val){
    getSearchResults(val);
  }, 2000)

  const handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
    console.log(searchText);
    debounceFunc(query);
  };

  return (
    <>
      <form className="w-96 relative flex items-centerm ml-7 font-nunito">
        <input
          onChange={handleInput}
          value={searchText}
          className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan"
          type="text"
          name="search"
          placeholder="Search here"
        />
        <button className="absolute right-1 cursor-pointer" type="submit">
          <img
            className="w-full h-auto fill-cyan"
            src={searchIcon}
            alt="search icon"
          />
        </button>
      </form>

      {searchText.length > 0 ? (
        <ul className="absolute top-11 right-0 w-full h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md">
          <li>bitcoin</li>
          <li>ethereum</li>
        </ul>
      ) : null}
    </>
  );
}

export default Search;

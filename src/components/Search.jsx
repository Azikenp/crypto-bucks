import React, { useContext, useState } from "react";
import debounce from "lodash.debounce";
import searchIcon from "../assets/search.svg";
import { CryptoContext } from "../context/CryptoContext";

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  const { searchData, setCoinSearch, setSearchData } =
    useContext(CryptoContext);

  const handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
    console.log(searchText);
    handleSearch(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
  };

  const selectCoin = (coin) => {
    setCoinSearch(coin);
    setSearchText("");
    setSearchData();
  };

  return (
    <>
      <form
        className="w-96 relative flex items-centerm ml-7 font-nunito"
        onSubmit={handleSubmit}
      >
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
        <ul className="absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200">
          {searchData ? (
            searchData.map((coin) => {
              return (
                <li
                  className="flex items-center ml-4 my-2 cursor-pointer"
                  key={coin.id}
                  onClick={() => selectCoin(coin.id)}
                >
                  <img
                    className="w-[1rem] h-[1rem] mx-1.5 ml-5"
                    src={coin.thumb}
                    alt={coin.name}
                  />
                  <span>{coin.name}</span>
                </li>
              );
            })
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-300 animate-spin" role="status">
              </div>
                <span className="ml-2">searching . . .</span>
            </div>
          )}
        </ul>
      ) : null}
    </>
  );
};

function Search() {
  let { getSearchResults } = useContext(CryptoContext);

  const debounceFunc = debounce(function (val) {
    getSearchResults(val);
  }, 2000);

  return (
    <div className="relative">
      <SearchInput handleSearch={debounceFunc} />
    </div>
  );
}

export default Search;

import React, { useContext, useRef } from "react";
import Search from "./Search";
import submitIcon from "../assets/submit-icon.svg"
import { CryptoContext } from "../context/CryptoContext";

function Filters() {
  const {setCurrency} = useContext(CryptoContext);
  const currencyRef  = useRef(null)

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  }


  return (
    <div className="w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative">
      <Search />
      <div className="flex mr-7">
        <form className="relative flex font-nunito items-center mr-12" onSubmit={handleCurrencySubmit}>
          <label
            className="relative flex items-center justify-center mr-2 font-bold"
            htmlFor="currency"
          >
            currency:
          </label>
          <input
            placeholder="usd"
            className="w-16 rounded bg-gray-200 text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan leading-4"
            type="text"
            name="currency"
            ref={currencyRef}
          />
          <button className="ml-1 cursor-pointer" type="submit">
            <img src={submitIcon} alt="submit icon" className="w-full h-auto" />
          </button>
        </form>

        <label className="relative flex justify-center items-center">
        <span className="font-bold mr-2">sort by:</span>
        <select className="rounded bg-gray-200 text-base pl-2 pr-10 py-1.5 leading-4 capitalize" name="sortby">
          <option value="market_cap_desc">market cap desc</option>
          <option value="market_cap_asc">market cap asc</option>
          <option value="volume_desc">volume desc</option>
          <option value="volume_asc">volume asc</option>
          <option value="id_desc">id desc</option>
          <option value="id_asc">id asc</option>
          <option value="gecko_desc">gecko desc</option>
          <option value="gecko_asc">gecko asc</option>
        </select>
      </label>
      </div>
    </div>
  );
}

export default Filters;

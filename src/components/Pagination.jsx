import React from "react";
import paginationArrow from "../assets/pagination-arrow.svg";

function Pagination() {
  return (
    <div className="flex items-center">
      <ul className="flex items-center justify-end text-sm">
        <li className="flex items-center">
          <button className="outline-0 hover:text-cyan w-8">
            <img className="w-full h-auto rotate-180" src={paginationArrow} alt="" />
          </button>
        </li>
        <li><button className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg">...</button></li>
        <li><button className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5">1</button></li>
        <li><button className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5">2</button></li>
        <li><button className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5">3</button></li>
        <li><button className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center">...</button></li>
        <li><button className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center"> 100</button></li>
        <li className="flex items-center">
          <button>
            <img className="w-full h-auto" src={paginationArrow} alt="" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;

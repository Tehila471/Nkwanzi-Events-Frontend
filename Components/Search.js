import React from "react";

const Search = () => {
  return (
    <div className="w-full h-32 bg-gray-100 p-8 flex flex-row justify-end space-x-6">
      <div className="p-6 w-1/4 h-10 space-x-2 rounded-full bg-gray-300 text-indigo-900 flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <div>Search</div>
      </div>
      <div className="rounded bg-indigo-900 flex items-center justify-center h-12 py-4 px-10 text-gray-100 hover:bg-indigo-600 cursor-pointer">
        To Advertise
      </div>
    </div>
  );
};

export default Search;

import React from "react";

export const SearchInput = ({ className = "", style }) => {
  return (
    <div className={`a-input-search ${className}`}>
      <div className="a-input-search__wrapper">
        <div className="a-input-search__search">
          <input
            id="search"
            type="search"
            placeholder="Search"
            autocomplete="off"
          />
          <img src="images/icon/Search_alt.png" alt="icon search" />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import searchIcon from "../assets/icon-search.svg";
import { updateSearchString } from "../features/searchSlice";
import { useDispatch } from "react-redux";

const Searchbox = ({ searchString }) => {
  const dispatch = useDispatch();

  return (
    <div className="searchbox flexbox">
      <img src={searchIcon} alt="search icon" className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search for movies or TV series"
        value={searchString}
        onChange={({ target }) => dispatch(updateSearchString(target.value))}
      />
    </div>
  );
};

export default Searchbox;

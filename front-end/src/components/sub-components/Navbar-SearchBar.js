import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { setSearching } from "../../actions/campaigns";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const { searching } = useSelector((state) => state.campaigns);

  const dispatch = useDispatch();

  const searchQuery = (event) => {
    event.preventDefault();

    console.log("move to search page");
    dispatch(setSearching());
  };

  const setQueryString = (event) => {
    setQuery(event.target.value);
  };

  if (searching) {
    return <Redirect to={`/search/${category}/${query}`}></Redirect>;
  }
  return (
    <form id="search-container" onSubmit={searchQuery}>
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            id="search-bar"
            className="input is-rounded"
            type="text"
            name="search"
            value={query}
            placeholder="Search..."
            onChange={setQueryString}
            required
          ></input>
          <span className="icon is-medium is-left">
            <i className="fas fa-search"></i>
          </span>
          <span className="icon is-medium is-right">
            <i
              id="search-bar-close"
              className="far fa-window-close"
              onClick={() => setQuery("")}
            ></i>
          </span>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;

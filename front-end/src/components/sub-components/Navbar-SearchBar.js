import React, { useState } from "react";

import "../styles/SearchBar.css";
import { useDispatch } from "react-redux";

const SearchBar = (props) => {
  const { setShowSearch } = props;
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const searchQuery = (event) => {
    event.preventDefault();
    setShowSearch(false);
    // SEARCH DISPATCH THUNK
  };

  const setQueryString = (event) => {
    setQuery(event.target.value);
  };

  const hideSearch = () => {
    setShowSearch(false);
  };
  return (
    <form id="search-container" onSubmit={searchQuery}>
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            id="search-bar"
            className="input is-large"
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
              className="far fa-window-close fa-2x"
              onClick={hideSearch}
            ></i>
          </span>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;

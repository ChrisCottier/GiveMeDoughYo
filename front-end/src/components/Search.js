import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./Navbar";
import {
  searchFor,
  clearSearch,
  setQueryAndCat,
  doneSearching,
} from "../actions/campaigns";

const Search = () => {
  const { category, query } = useParams();
  // const { currentSearchCategory, currentSearchQuery } = useSelector(
  //   (state) => state.campaigns
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    // if (category === currentSearchCategory && query === currentSearchQuery) {
    //   return;
    // }
    dispatch(doneSearching());
    console.log("sending search in search component");
    dispatch(searchFor(query, category));

    return () => dispatch(clearSearch());
  }, [category, query]);
  // dispatch(setQueryAndCat(query, category));

  return (
    <>
      <main>Search Page</main>
    </>
  );
};

// https://bulma.io/documentation/layout/tiles/
export default Search;

import { baseUrl } from "../config";
import React from "react";

export const CATEGORY_LIST = "CATEGORY_LIST";

export const getCategories = () => async (dispatch) => {
  const res = await fetch(`${baseUrl}/categories`);
  const categories = await res.json();

  dispatch({ type: CATEGORY_LIST, categories });
};

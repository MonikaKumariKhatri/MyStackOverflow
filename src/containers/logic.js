import axios from "axios";
import { store } from "./../store";
import { actions as searchResultsAction } from "../ducks/searchResults";
import { defaultMemoize } from "reselect";
import cache from "./cacheLRU";

export const getResponseLogic = defaultMemoize(async query => {
  let response = cache.get(query);
  if (!response) {
    response = await axios.get(
      `https://api.stackexchange.com/2.2/search/excerpts?order=desc&sort=activity&q=${query}&site=stackoverflow`
    );
    cache.set(query, response);
  }

  await store.dispatch(
    searchResultsAction.replaceSearchResults(response.data.items)
  );
});

export const decodeHtml = html => {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

import axios from "axios";
import { store } from "./../store";
import { actions as searchResultsAction } from "../ducks/searchResults";

export const getResponseLogic = async query => {
  const response = await axios.get(
    `https://api.stackexchange.com/2.2/search/excerpts?order=desc&sort=activity&q=${query}&site=stackoverflow`
  );
  await store.dispatch(
    searchResultsAction.replaceSearchResults(response.data.items)
  );
};

export const decodeHtml = html => {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

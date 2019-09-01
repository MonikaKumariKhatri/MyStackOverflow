import { combineReducers } from "redux";
import searchResults, { actions as searchResultsAction } from "./searchResults";

export default combineReducers({
  searchResults
});

export const actions = {
  searchResultsAction
};

import { createAction, simpleDataSetReducer } from "./util";

const REPLACE_SEARCH_RESULTS = "REPLACE_SEARCH_RESULTS";

export default simpleDataSetReducer(
  {
    replaceActionType: REPLACE_SEARCH_RESULTS
  },
  {}
);

export const actions = {
  replaceSearchResults: createAction(REPLACE_SEARCH_RESULTS)
};

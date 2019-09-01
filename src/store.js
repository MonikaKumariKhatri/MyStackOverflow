import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import immutableStateInvariant from "redux-immutable-state-invariant";
import domain from "./ducks";

export const reducers = combineReducers({
  domain
});

function setupStore() {
  const middlewares = [];
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === "development") {
    middlewares.push(immutableStateInvariant());
    composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION__"]
      ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
      : compose;
  }
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(reducers, {}, enhancer);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./ducks", () => {
      const newDuck = require("./ducks").default;
      const nextRootReducer = combineReducers({
        domain: newDuck
      });
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export const store = setupStore();

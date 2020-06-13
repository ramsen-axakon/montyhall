import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";

const loggerMiddleware = createLogger({
  stateTransformer: (state) => {
    const newState = {};

    for (const i of Object.keys(state)) {
      newState[i] = state[i];
    }
    return newState;
  },
});

let composeEnhancers = compose;
if (process.env.NODE_ENV === "development") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  rootReducer,
  composeEnhancers(
    process.env.NODE_ENV === "development"
      ? applyMiddleware(loggerMiddleware)
      : applyMiddleware()
  )
);

export default store;

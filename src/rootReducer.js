import { combineReducers } from "redux";
import reducer from "./reducer";

const appReducer = combineReducers({
  app: reducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;

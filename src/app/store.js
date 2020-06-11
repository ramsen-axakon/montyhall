import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  devTools: true,
  reducer: {
    counter: counterReducer,
  },
});

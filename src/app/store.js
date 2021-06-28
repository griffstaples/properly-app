import { createStore } from "@reduxjs/toolkit";
import browseReducer from "../features/browse/browseSlice";

export const store = createStore(
  browseReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

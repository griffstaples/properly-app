import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import browseReducer from "../features/browse/browseSlice";
import { composeWithDevTools } from "redux-devtools-extension";
const enhancer = composeWithDevTools(applyMiddleware());

export const store = createStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

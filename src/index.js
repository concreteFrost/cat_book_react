import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";

const renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
    <App
      state={store.getState()}
      dispatch ={store.dispatch.bind(store)}
    />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState()); //renders on first page load
store.subscribe(()=>{renderEntireTree(store.getState())});

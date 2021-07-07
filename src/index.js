//This file is formatted by Prettier-Code formatter

/**
 *  React imports.
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

/**
 *  Components imports.
 */
import store from "./store";
import App from "./App.js";

/**
 *  Style scss imports.
 */
import "./style.scss";

/**
 *  Main component.
 */

function Main() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

// merge the Main to the Html
const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);

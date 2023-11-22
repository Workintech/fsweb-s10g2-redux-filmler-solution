import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import logger from "redux-logger";

const root = ReactDOM.createRoot(document.getElementById("root"));

const dukkan = createStore(reducer, applyMiddleware(logger));

root.render(
  <BrowserRouter>
    <Provider store={dukkan}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

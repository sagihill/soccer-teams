import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { teamsReducer } from "./redux/reducers";

import "./index.css";

const logger = createLogger();

const rootReducers = combineReducers({ teamsReducer });

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

registerServiceWorker();

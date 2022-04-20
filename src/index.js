import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { teamsReducer } from "./redux/teams/TeamsReducer";
import { requestsReducer } from "./redux/requests/RequestsReducer";

import "./index.css";

const logger = createLogger();

const rootReducers = combineReducers({ teamsReducer, requestsReducer });

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

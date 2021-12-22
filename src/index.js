import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "./modules";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

import { ThemeContextProvider } from "./contexts/themeContext";
import { check, tempSetAdmin } from "./modules/admin";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadAdmin() {
  try{
    const admin = localStorage.getItem('admin');
    if(!admin) return;
    store.dispatch(tempSetAdmin(JSON.parse(admin)));
    store.dispatch(check());
  } catch(e) {
    console.log('localStorage is not working.');
  }
}

sagaMiddleware.run(rootSaga);
loadAdmin();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

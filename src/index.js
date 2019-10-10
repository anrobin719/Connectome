import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/styles";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./hoc/ScrollToTop/ScrollToTop";
import {
  editorReducer,
  postReducer,
  listReducer,
  baseReducer,
  authReducer,
  mypageReducer
} from "./store/reducers/index";

const rootReducer = combineReducers({
  editor: editorReducer,
  post: postReducer,
  list: listReducer,
  base: baseReducer,
  auth: authReducer,
  mypage: mypageReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.register();

import React from "react";
import {Provider} from "react-redux";
import store from "../store/store";
import App from "./App";
import CheckAuth from "./ordinary/CheckAuth";

export default function ConnectRedux() {
  return <Provider store={store}>
    <CheckAuth/>
  </Provider>
}
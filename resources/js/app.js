import * as ReactDOM from "react-dom";
import React from "react";
import "normalize.css";
import "../scss/ui/ui.scss";
import ConnectRedux from "./components/ConnectRedux";
import {getCookie} from "./helpers";
import axios from "axios";

if(window.localStorage.getItem("access_token")) {
  axios.interceptors.request.use(function (config) {
    config.headers.Authorization =  `Bearer ${window.localStorage.getItem("access_token")}`;
    return config;
  });
}

ReactDOM.render(<ConnectRedux/>, document.getElementById("nxp"))
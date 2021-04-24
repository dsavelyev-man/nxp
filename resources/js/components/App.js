import React from "react";
import "../../scss/app.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../pages/home/Home";
import Login from "../pages/admin/Login";

const routes = [
  {
    path: "/",
    component: <Home/>,
    exact: false,
    permission: true,
  },
  {
    path: "/admin/login",
    component: <Login/>,
    exact: true,
    permission: true
  },
];

function App() {
  return <BrowserRouter>
    <Switch>
      {
        routes.map(route => (
          route.permission ? (
            <Route exact={route.exact} key={route.path}>
              {
                route.component
              }
            </Route>
          ) : ""
        ))
      }
    </Switch>
  </BrowserRouter>;

}

export default App
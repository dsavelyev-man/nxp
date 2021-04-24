import React from "react";
import "../../scss/app.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../pages/home/Home";
import Login from "../pages/admin/Login";
import Admin from "../pages/admin/Admin";

const routes = [
  {
    path: "/",
    component: <Home/>,
    exact: true,
    permission: true,
  },
  {
    path: "/admin",
    component: <Admin/>,
    exact: true,
    permission: true
  },
  {
    path: "/admin/login",
    component: <Login/>,
    exact: false,
    permission: true
  },
];

function App() {
  return <BrowserRouter>
    <Switch>
      {
        routes.map(route => {

          return route.permission ? (
            <Route exact={route.exact} path={route.path} key={route.path}>
              {
                route.component
              }
            </Route>
          ) : ""
        })
      }
      {/*<Route exact={true} path="/">*/}
      {/*  asdas*/}
      {/*</Route>*/}
      {/*<Route path="/admin/login">*/}
      {/*  <Login/>*/}
      {/*</Route>*/}
    </Switch>
  </BrowserRouter>;

}

export default App
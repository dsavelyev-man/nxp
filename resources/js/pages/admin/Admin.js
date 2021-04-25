import React from "react";
import Left from "./Left";
import "../../../scss/pages/admin/admin.scss";
import Posts from "./posts/Posts";
import { Switch, Route, useLocation } from "react-router-dom";
import Login from "./Login";
import Create from "./posts/Create";

const routes = [
  {
    path: "/login",
    component: <Login/>,
    exact: false,
  },
  {
    path: "/posts",
    component: <Posts/>,
    exact: true
  },
  {
    path: "/posts/create",
    component: <Create/>,
    exact: false
  },
];

export default function Admin() {
  const location = useLocation();

  return <div className="admin">
    {
      location.pathname !== "/admin/login" ? <Left/> : ""
    }
    <Switch>
      <Route exact path="/admin">
        admin
      </Route>
      {
        routes.map(route => (
          <Route exact={route.exact} key={route.path} path={`/admin${route.path}`}>
            {
              route.component
            }
          </Route>
        ))
      }
    </Switch>
  </div>
};
import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {updateCurrentUser} from "../../store/reducers/currentUser/acitons";
import App from "../App";
import {RequestCurrentUser} from "../../requests";

function CheckAuth(props) {
  const loaded = useState(false);

  useEffect(() => {
    RequestCurrentUser().then((r) => {
      loaded[1](true)
      return props.updateCurrentUser({
        loaded: true,
        user: r.data,
        auth: true
      })
    })
    loaded[1](true)
    return props.updateCurrentUser({
      loaded: true,
      user: {},
      auth: false
    })
  }, [])

  return loaded[0] ? <App/> : ""
}

export default connect(
  state => ({
    currentUser: state.currentUser
  }),
  {
    updateCurrentUser,
  }
)(CheckAuth)
import React, {useEffect, useState} from "react";
import "../../../scss/pages/admin/login.scss";
import Button from "../../components/ui/Button";
import { connect } from "react-redux";
import {updateCurrentUser} from "../../store/reducers/currentUser/acitons";
import {RequestCurrentUser, RequestLogin} from "../../requests";
import { Redirect } from "react-router-dom";

function Login(props) {

  const data = useState({
    email: "",
    password: "",
  });

  return !props.currentUser.auth ? (
    <div className="admin-login">
      <form
        className="admin-login-form bg-dark p-12 br-button"
        onSubmit={(e) => {
          e.preventDefault()
          RequestLogin(data[0]).then((r) => {
            if(data.status = 200) {
              window.localStorage.setItem("access_token", r.data.token);
            }
            window.location.reload();
          })
        }}
      >
        <input
          className="admin-login-input"
          placeholder="почта"
          type="email"
          onChange={(e) => {
            data[1](state => ({
              ...state,
              email: e.target.value
            }))
          }}
          value={data[0].email}
        />
        <input
          className="admin-login-input"
          placeholder="пароль"
          type="password"
          onChange={(e) => {
            data[1](state => ({
              ...state,
              password: e.target.value
            }))
          }}
          value={data[0].password}
        />
        <Button color="primary">
          Войти
        </Button>
      </form>
    </div>
  ) : <Redirect to="/admin"/>
}

export default connect(
  (state) => ({
    currentUser: state.currentUser
  }),
  {
    updateCurrentUser: updateCurrentUser
  }
)(Login);
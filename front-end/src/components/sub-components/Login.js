import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { submitLogin } from "../../actions/auth";
import EmailPasswordInputs from "./EmailPasswordInputs";

const Login = (props) => {
  const { showLogin, setShowLogin } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitLogin(email, password));
  };

  let displayType;
  if (!showLogin) {
    displayType = "none";
  } else {
    displayType = "block";
  }

  const modalOff = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (
      event.target.classList.contains("modal-background") ||
      event.target.classList.contains("cancel-login")
    ) {
      setShowLogin(false);
    }
  };

  return (
    <div className="modal" style={{ display: displayType }}>
      <div className="modal-background " onClick={modalOff}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Welcome back!</p>
        </header>
        <section className="modal-card-body">
          <div>Log in to continue.</div>
          <form onSubmit={handleSubmit}>
            <EmailPasswordInputs
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            ></EmailPasswordInputs>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" type="submit">
                  Log In
                </button>
              </div>
              <div className="control">
                <button className="button is-primary">Demo User</button>
              </div>
              <div className="control">
                <button
                  className="button is-link is-light cancel-login"
                  onClick={modalOff}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;

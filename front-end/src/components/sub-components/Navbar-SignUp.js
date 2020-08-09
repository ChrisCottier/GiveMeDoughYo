import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { submitSignUp } from "../../actions/auth";
import EmailPasswordInputs from "./EmailPasswordInputs";

const SignUp = (props) => {
  const { showSignUp, setShowSignUp } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitSignUp(firstName, lastName, email, password));
  };

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  let displayType;
  if (!showSignUp || token) {
    displayType = "none";
  } else {
    displayType = "block";
  }

  const modalOff = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (
      event.target.classList.contains("modal-background") ||
      event.target.classList.contains("cancel-signUp")
    ) {
      setShowSignUp(false);
    }
  };

  return (
    <div className="modal" style={{ display: displayType }}>
      <div className="modal-background" onClick={modalOff}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Sign Up</p>
        </header>
        <section className="modal-card-body">
          <div>Sign up to continue.</div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Your First Name"
                  name="firstName"
                  value={firstName}
                  onChange={handleFirstName}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Your Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={handleLastName}
                  required
                />
              </div>
            </div>
            <EmailPasswordInputs
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            ></EmailPasswordInputs>
            <div className="field">
              <div className="control">
                <button className="button is-link" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SignUp;

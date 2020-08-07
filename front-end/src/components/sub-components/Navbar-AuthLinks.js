import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";

import { removeToken, ACCESS_TOKEN } from "../../actions/auth";

export const NavLoggedIn = (props) => {
  const { firstName, userId, profilePic } = props;
  const dispatch = useDispatch();

  const logOut = () => {
    document.cookie = `${ACCESS_TOKEN}=;`;
    dispatch(removeToken());
  };
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <div className="navbar-link">
        <div
          id="profile-avatar"
          className="is-rounded"
          style={{ backgroundImage: `url(${profilePic})` }}
        />
        <span>{firstName}</span>
      </div>
      <div className="navbar-dropdown">
        <NavLink className="navbar-item" to={`/users/${userId}`}>
          Profile
        </NavLink>
        <NavLink to="/" className="navbar-item" onClick={logOut}>
          Log Out
        </NavLink>
      </div>
    </div>
  );
};

export const NavLoggedOut = (props) => {
  const { setShowLogin, setShowSignUp } = props;
  return (
    <>
      <div className="navbar-item" onClick={() => setShowLogin(true)}>
        <div>Log In</div>
      </div>
      <div className="navbar-item" onClick={() => setShowSignUp(true)}>
        <div>Sign Up</div>
      </div>
    </>
  );
};

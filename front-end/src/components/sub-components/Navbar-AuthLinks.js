import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";

import { removeToken, ACCESS_TOKEN, SHOW_LOGIN } from "../../actions/auth";

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
        <NavLink className="navbar-item" to={`/profile`}>
          Profile
        </NavLink>
        <NavLink className="navbar-item" to={`/profile/campaigns`}>
          My Campaigns
        </NavLink>
        <NavLink className="navbar-item" to={`/profile/contributions`}>
          My Contributions
        </NavLink>
        <NavLink to="/" className="navbar-item" onClick={logOut}>
          Log Out
        </NavLink>
      </div>
    </div>
  );
};

export const NavLoggedOut = (props) => {
  const { setShowSignUp } = props;
  const dispatch = useDispatch();

  return (
    <>
      <a
        className="navbar-item"
        onClick={() => dispatch({ type: SHOW_LOGIN, showLogin: true })}
      >
        <div>Log In</div>
      </a>
      <a className="navbar-item" onClick={() => setShowSignUp(true)}>
        <div>Sign Up</div>
      </a>
    </>
  );
};

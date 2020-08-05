import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styles/NavBar.css";
import { appName } from "../config";
import Explore from "./sub-components/Navbar-Explore";
import Login from "./sub-components/Navbar-Login";
import SignUp from "./sub-components/Navbar-SignUp";
import { NavLoggedIn, NavLoggedOut } from "./sub-components/Navbar-AuthLinks";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    setShowSignUp(false);
    setShowLogin(false);
  }, [token]);

  let authLinks;

  if (token) {
    authLinks = <NavLoggedIn></NavLoggedIn>;
    // setShowLogin(false);
    // setShowSignUp(false);
  } else {
    authLinks = (
      <NavLoggedOut
        setShowLogin={setShowLogin}
        setShowSignUp={setShowSignUp}
      ></NavLoggedOut>
    );
  }

  return (
    <>
      <nav className="navbar is-fixed-top">
        <NavLink to="/" className="logo navbar-brand">
          {appName.toUpperCase()}
        </NavLink>
        <div className="navbar-menu">
          <div className="navbar-start">
            {/*
              explore dropdown
              about
              search */}
            <Explore></Explore>
            <div className="navbar-item ">
              <NavLink to="/about">About</NavLink>
            </div>
            <div id="search-icon" className="navbar-item">
              <div className="search-icon"></div>
            </div>
          </div>

          <div className="navbar-end">
            {/* LOGGED IN
              start a campaign
              profile dropdown
              LOGGED OUT
              start a campaign
              Log In
              Sign Up
              */}
            <div className="navbar-item">
              <NavLink to="/" className="start-campaign">
                Start A Campaign
              </NavLink>
            </div>
            {authLinks}
          </div>
        </div>
      </nav>
      <Login showLogin={showLogin} setShowLogin={setShowLogin}></Login>
      <SignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp}></SignUp>
    </>

    // TODO OTHER DIV THAT HASTHE SEARCH BAR THAT REPLACES THE NAVBAR
  );
};

{
  /* <NavLink to="/">Home</NavLink>
<NavLink to="/campaigns/example">Campaign</NavLink>
<NavLink to="/users/example">User</NavLink>
<NavLink to="/search/example">Search</NavLink> */
}

export default Navbar;

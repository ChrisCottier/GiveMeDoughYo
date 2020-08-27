import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styles/NavBar.css";
import { appName } from "../config";
import {footerRef} from "./Footer"
import Explore from "./sub-components/Navbar-Explore";
import Login from "./sub-components/Navbar-Login";
import SignUp from "./sub-components/Navbar-SignUp";
import SearchBar from "./sub-components/Navbar-SearchBar";
import { NavLoggedIn, NavLoggedOut } from "./sub-components/Navbar-AuthLinks";

const Navbar = () => {
  // const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { token, userId, firstName, profilePic } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    setShowSignUp(false);
    // setShowLogin(false);
  }, [token]);

  let authLinks;

  if (token) {
    authLinks = (
      <NavLoggedIn
        firstName={firstName}
        userId={userId}
        profilePic={profilePic}
      ></NavLoggedIn>
    );
  } else {
    authLinks = (
      <NavLoggedOut
        // setShowLogin={setShowLogin}
        setShowSignUp={setShowSignUp}
      ></NavLoggedOut>
    );
  }



  return (
    <>
      <nav id="main-nav" className="navbar is-fixed-top is-transparent">
        <NavLink to="/" className="logo navbar-brand">
          {appName.toUpperCase()}
        </NavLink>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item ">
              {/* <NavLink to="/about">About</NavLink> */}
              <a onClick={()=> footerRef.current.scrollIntoView({ behavior: 'smooth' })}>About</a>
            </div>
            <div className="navbar-item">
              <SearchBar></SearchBar>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <NavLink to="/create-campaign" className="start-campaign">
                Start A Campaign
              </NavLink>
            </div>
            {authLinks}
          </div>
        </div>
      </nav>
      <Login></Login>
      <SignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp}></SignUp>
    </>

    // TODO OTHER DIV THAT HASTHE SEARCH BAR THAT REPLACES THE NAVBAR
  );
};

export default Navbar;

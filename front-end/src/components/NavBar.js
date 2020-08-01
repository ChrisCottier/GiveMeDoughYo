import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/NavBar.css";

import Explore from "./sub-components/Explore";

const NavBar = () => {
  return (
    <nav className="navbar is-fixed-top">
      {/* <div className="navbar-column1"> */}
      <NavLink to="/" className="logo navbar-brand">
        GIVEMEDOUGHYO
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
        </div>
      </div>

      {/* </div> */}
      {/* <div className="navbar-column2"></div> */}
    </nav>
    // TODO OTHER DIV THAT HASTHE SEARCH BAR THAT REPLACES THE NAVBAR
  );
};

{
  /* <NavLink to="/">Home</NavLink>
<NavLink to="/campaigns/example">Campaign</NavLink>
<NavLink to="/users/example">User</NavLink>
<NavLink to="/search/example">Search</NavLink> */
}

export default NavBar;

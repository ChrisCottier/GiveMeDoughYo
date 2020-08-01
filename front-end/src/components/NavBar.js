import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
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
          <div></div>
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
  );
};

{
  /* <NavLink to="/">Home</NavLink>
<NavLink to="/campaigns/example">Campaign</NavLink>
<NavLink to="/users/example">User</NavLink>
<NavLink to="/search/example">Search</NavLink> */
}

export default NavBar;

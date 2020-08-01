import React from "react";
import { NavLink } from "react-router-dom";

const Explore = () => {
  return (
    <div id="navbar-explore" className="navbar-item has-dropdown">
      <div className="navbar-link">Explore</div>
      <div className="navbar-dropdown">
        <NavLink to="/search/example" className="navbar-item">
          TAG
        </NavLink>
      </div>
    </div>
  );
};

export default Explore;

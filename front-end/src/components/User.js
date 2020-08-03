import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";

import { getUserInfo } from "../actions/users";

const User = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUserInfo(id));
  }, [id]);

  if (!user) {
    return null;
  }

  console.log("your user", user);

  return (
    <main>
      <div>
        {user.firstName} {user.lastName}
      </div>
      <div className="location">
        <i className="fas fa-map-marker-alt"></i>
        <div>
          {user.city}, {user.stateProvince}, {user.country}
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar-start">
          <NavLink className="navbar-item is-active" to={`/users/${user.id}`}>
            {" "}
            Profile{" "}
          </NavLink>
          <NavLink className="navbar-item is-active" to={`/users/${user.id}`}>
            {" "}
            Campaigns{" "}
          </NavLink>
        </div>
      </nav>
      <article>
        <h2>{user.shortDescription}</h2>
        <p>{user.aboutMe}</p>
      </article>
      <div></div>
    </main>
  );
};

export default User;

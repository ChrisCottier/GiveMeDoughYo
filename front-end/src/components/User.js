import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";

import { getUserInfo } from "../actions/users";
import {
  UserProfileView,
  CampaignsView,
} from "./sub-components/UserProfileViews";

const User = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const { campaigns } = useSelector((state) => state.campaigns);

  useEffect(() => {
    dispatch(getUserInfo(id));
  }, [id]);

  if (!user) {
    return null;
  }
  let campaignView = false;
  if (window.location.href.endsWith("campaigns")) {
    campaignView = true;
  }

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
            Profile
          </NavLink>
          <NavLink
            className="navbar-item is-active"
            to={`/users/${user.id}/campaigns`}
          >
            Campaigns
          </NavLink>
        </div>
      </nav>
      {campaignView ? (
        <CampaignsView></CampaignsView>
      ) : (
        <UserProfileView user={user} campaigns={campaigns}></UserProfileView>
      )}
      {/* PART 1 PROFILE VIEW */}
      {/* PART 2 CAMPAIGN VIEW */}
    </main>
  );
};

export default User;

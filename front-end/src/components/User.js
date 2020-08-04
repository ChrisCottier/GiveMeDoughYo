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
      <div className="user-page-container container is-widescreen">
        <header className="user-page-header hero is-light">
          <div className="hero-body">
            <h1 className="user-name title">
              {user.firstName} {user.lastName}
            </h1>
            <h2 className="user-location">
              <i className="fas fa-map-marker-alt"></i>
              {user.city}, {user.stateProvince}, {user.country}
            </h2>
          </div>
          <nav className="navbar user-navbar">
            <div className="navbar-start">
              <NavLink
                className="navbar-item is-active"
                to={`/users/${user.id}`}
              >
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
        </header>
        {campaignView ? (
          <CampaignsView></CampaignsView>
        ) : (
          <UserProfileView user={user} campaigns={campaigns}></UserProfileView>
        )}
        {/* PART 1 PROFILE VIEW */}
        {/* PART 2 CAMPAIGN VIEW */}
      </div>
    </main>
  );
};

export default User;

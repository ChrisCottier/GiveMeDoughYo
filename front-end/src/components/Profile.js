import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import "./styles/User.css";
import Home from "./Home";
import { getProfileInfo } from "../actions/users";
import {
  UserProfileView,
  CampaignsView,
  ContributionsView,
  ProfileNav
} from "./sub-components/User-ProfileViews";

const Profile = (props) => {
  const dispatch = useDispatch();
  const { view } = useParams();
  const { token, userId } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.users);
  const { campaigns } = useSelector((state) => state.campaigns);
  const { contributions } = useSelector((state) => state.contributions);
  const { follows } = useSelector((state) => state.follows);

  const [profileNav, setProfileNav] = useState("selected-nav");
  const [campaignNav, setCampaignNav] = useState("");
  const [contributionNav, setContributionNav] = useState("");


  const handleNav = (event) => {
    setProfileNav("");
    setCampaignNav("");
    setContributionNav("");

    const name = event.target.getAttribute("name");

    if (name === "profileNav") {
      setProfileNav("selected-nav");
    } else if (name === "campaignNav") {
      setCampaignNav("selected-nav");
    } else if (name === "contributionNav") {
      setContributionNav("selected-nav");
    }
  };

  useEffect(() => {
    if (!userId || !token) return;
    dispatch(getProfileInfo(userId, token));

    if (view === "campaigns") {
      setProfileNav("");
      setCampaignNav("selected-nav");
      setContributionNav("");
    } else if (view === "contributions") {
      setProfileNav("");
      setCampaignNav("");
      setContributionNav("selected-nav");
    } else if (!view) {
      setProfileNav("selected-nav");
      setCampaignNav("");
      setContributionNav("");
    }
  }, [userId, view]);

  if (!user || !campaigns) {
    return <Home></Home>;
  }

  return (
    <main>
      <div className="user-page-container container is-widescreen">
        <ProfileNav></ProfileNav>
        <header className="user-page-header hero">
          <div className="hero-body">
            <h1 className="user-name title">
              {user.firstName} {user.lastName}
            </h1>
            <h2 className="user-location">
              <i className="fas fa-map-marker-alt"></i>
              {user.city ? ` ${user.city},` : ''}
              {user.stateProvince ? ` ${user.stateProvince},` : ''}
              {user.country ? ` ${user.country}` : ''}
            </h2>
          </div>
          <nav className="navbar user-navbar">
            <div className="navbar-start">
              <a
                className={`navbar-item is-link ${profileNav}`}
                name="profileNav"
                onClick={handleNav}
              >
                Profile
              </a>
              <a
                className={`navbar-item is-link ${campaignNav}`}
                name="campaignNav"
                onClick={handleNav}
              >
                Campaigns
              </a>
              <a
                className={`navbar-item is-link ${contributionNav}`}
                name="contributionNav"
                onClick={handleNav}
              >
                Contributions
              </a>
            </div>
          </nav>
        </header>
        {profileNav ? (
          <UserProfileView
            user={user}
            campaigns={campaigns}
            contributionsCount={contributions.length}
          ></UserProfileView>
        ) : (
          <></>
        )}
        {campaignNav ? (
          <CampaignsView
            user={user}
            campaigns={campaigns}
            follows={follows}
          ></CampaignsView>
        ) : (
          <></>
        )}
        {contributionNav ? (
          <ContributionsView
            user={user}
            contributions={contributions}
          ></ContributionsView>
        ) : (
          <></>
        )}
        {/* PART 1 PROFILE VIEW */}
        {/* PART 2 CAMPAIGN VIEW */}
      </div>
    </main>
  );
};

export default Profile;

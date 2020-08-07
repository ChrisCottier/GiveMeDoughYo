import React from "react";
import { NavLink } from "react-router-dom";

export const UserProfileView = (props) => {
  const { user, campaigns, contributionsCount } = props;

  return (
    <div className="profile-container columns">
      <article className="profile-left column is-three-fifths">
        <img className="profilePic" src={user.profilePic}></img>
        <div className="user-short-description">{user.shortDescription}</div>
        <p>{user.aboutMe}</p>
      </article>
      <div className="margin space column"></div>

      <div className="profile-right column is-one-third">
        <div className="about-me">
          <img className="avatar user-page-avatar" src={user.profilePic}></img>
          <h3 className="profile-header">About Me</h3>
        </div>
        <div className="user-stats">
          <div>
            <span className="user-stat-num">{campaigns.length}</span>{" "}
            <span className="user-stat-category"> Campaigns</span>
          </div>
          <div>
            <span className="user-stat-num">{contributionsCount}</span>{" "}
            <span className="user-stat-category"> Contributions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CampaignsView = (props) => {
  const { user, campaigns, follows } = props;
  console.log(campaigns);
  return (
    <div className="user-campaigns-container">
      <h1 className="title is-3 ">Campaigns I'm On</h1>
      <div className="user-campaigns">
        {campaigns.map((campaign) => {
          return (
            <UserCampaigns user={user} campaign={campaign}></UserCampaigns>
          );
        })}
      </div>
      <h1 className="title is-3 follows-title">Campaigns I'm Following</h1>
      <div className="user-campaigns">
        {follows.map((follow) => {
          return <UserFollows follow={follow}></UserFollows>;
        })}
      </div>
    </div>
  );
};

const UserCampaigns = (props) => {
  const { user, campaign } = props;

  return (
    <div className="user-campaign-container">
      <NavLink
        to={`/campaigns/${campaign.id}`}
        className="user-campaign-pic"
        style={{ backgroundImage: `url(${campaign.campaignPic})` }}
      ></NavLink>
      <div className="user-campaign-details">
        <NavLink
          to={`/campaigns/${campaign.id}`}
          className="title is-3 user-campaign-title"
        >
          {campaign.title}
        </NavLink>
        <h2 className="subtitle is-5 user-campaign-creator">
          <span>By </span>
          <NavLink to={`/users/${user.id}`}>{user.firstName}</NavLink>
        </h2>
        <div className="user-campaign-tagline">{campaign.tagline}</div>
      </div>
    </div>
  );
};

const UserFollows = (props) => {
  const { follow } = props;
  const { Campaign: campaign, User: user } = follow;

  return (
    <div className="user-campaign-container">
      <NavLink
        to={`/campaigns/${campaign.id}`}
        className="user-campaign-pic"
        style={{ backgroundImage: `url(${campaign.campaignPic})` }}
      ></NavLink>
      <div className="user-campaign-details">
        <NavLink
          to={`/campaigns/${campaign.id}`}
          className="title is-3 user-campaign-title"
        >
          {campaign.title}
        </NavLink>
        <h2 className="subtitle is-5 user-campaign-creator">
          <span>By </span>
          <NavLink to={`/users/${user.id}`}>{user.firstName}</NavLink>
        </h2>
        <div className="user-campaign-tagline">{campaign.tagline}</div>
      </div>
    </div>
  );
};

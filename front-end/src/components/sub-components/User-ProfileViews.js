import React from "react";
import { NavLink } from "react-router-dom";

export const UserProfileView = (props) => {
  const { user, campaigns, contributionsCount } = props;

  return (
    <div className="profile-container columns">
      <article className="profile-left column is-three-fifths">
        <img
          className="profilePic"
          src={user.profilePic}
          alt="User's profile pic"
        ></img>
        <div className="user-short-description">{user.shortDescription}</div>
        <p>{user.aboutMe}</p>
      </article>
      <div className="margin space column"></div>

      <div className="profile-right column is-one-third">
        <div className="about-me">
          <img
            className="avatar user-page-avatar"
            src={user.profilePic}
            alt="User's avatar"
          ></img>
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
          {user.balance ? (
            <div>
              <span className="user-stat-num">{`$${user.balance}`}</span>{" "}
              <span className="user-stat-category"> Balance</span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export const CampaignsView = (props) => {
  const { user, campaigns, follows } = props;

  return (
    <div className="user-campaigns-container">
      <h1 className="title is-3 ">Campaigns I'm On</h1>
      <div className="user-campaigns">
        {campaigns.map((campaign) => {
          return (
            <UserCampaigns
              key={campaign.id}
              user={user}
              campaign={campaign}
            ></UserCampaigns>
          );
        })}
      </div>
      <h1 className="title is-3 follows-title">Campaigns I'm Following</h1>
      <div className="user-campaigns">
        {follows.map((follow) => {
          return <UserFollows key={follow.id} follow={follow}></UserFollows>;
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
        {/* <h2 className="subtitle is-5 user-campaign-creator">
          <span>By </span>
          <NavLink to={`/users/${user.id}`}>{user.firstName}</NavLink>
        </h2> */}
        <div className="user-campaign-tagline">{campaign.tagline}</div>
      </div>
    </div>
  );
};

export const ContributionsView = (props) => {
  const { contributions } = props;
  return (
    <div className="user-contributions-container">
      <h1 className="title is-3 user-contributions-title">My Contributions</h1>
      <div className="user-contributions-table">
        <header className="user-contributions-row user-contributions-header">
          <div className="user-contributions-col1">Date</div>
          <div className="user-contributions-col2">Campaign</div>
          <div className="user-contributions-col3">Amount</div>
          <div className="user-contributions-col4">Perk</div>
        </header>
        {contributions.map((contribution) => {
          const { Campaign: campaign } = contribution;
          return (
            <div key={contribution.id} className="user-contributions-row">
              <div className="user-contributions-col1">
                {contribution.createdAt.slice(0, 10)}
              </div>
              <div className="user-contributions-col2 user-contibutions-campaign">
                <NavLink
                  to={`/campaigns/${campaign.id}`}
                  className="contribution-campaign-pic"
                  style={{ backgroundImage: `url(${campaign.campaignPic})` }}
                ></NavLink>
                <NavLink to={`/campaigns/${campaign.id}`}>
                  {campaign.title}
                </NavLink>
              </div>
              <div className="user-contributions-col3">
                ${contribution.amount}
              </div>
              <div className="user-contributions-col4">{contribution.perk}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ProfileNav = () => {
  return (
    <nav id="profile-nav" className="navbar">
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink to="/profile" className="navbar-item is-active"><i className="fas fa-eye fa-2x"></i>Profile</NavLink>
          <NavLink to="/profile/edit" className="navbar-item is-active"><i className="far fa-edit fa-2x"></i>Edit Profile</NavLink>
        </div>
      </div>
    </nav>
  )
}

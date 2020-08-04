import React from "react";

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

export const CampaignsView = () => {
  return (
    <>
      <div>campaings</div>
    </>
  );
};

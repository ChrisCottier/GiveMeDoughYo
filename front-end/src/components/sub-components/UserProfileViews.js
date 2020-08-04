import React from "react";

export const UserProfileView = (props) => {
  const { user, campaigns } = props;
  return (
    <>
      <article className="profile-left">
        <h2>{user.shortDescription}</h2>
        <p>{user.aboutMe}</p>
      </article>
      <div className="profile-right">
        <div className="about-me">
          <h3>About Me</h3>
          <div>{campaigns.length} Campaigns</div>
        </div>
      </div>
    </>
  );
};

export const CampaignsView = () => {
  return (
    <>
      <div>campaings</div>
    </>
  );
};

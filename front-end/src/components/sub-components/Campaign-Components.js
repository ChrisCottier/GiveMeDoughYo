import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const CampaignPics = (props) => {
  const { campaign } = props;
  console.log(campaign);
  console.log(campaign.campaignPic);
  return (
    <div className="campaign-images column is-three-fifths">
      <figure className="image">
        <img className="campaign-pic" src={campaign.campaignPic}></img>
      </figure>
      <div className="tile is-ancestor other-pics">
        <div className="tile is-parent is-1 other-pic">
          <p className="is-child box">hi</p>
        </div>
        <div className="tile is-parent is-1 other-pic">
          <p className="is-child box">hi</p>
        </div>
        <div className="tile is-parent is-1 other-pic">
          <p className="is-child box">hi</p>
        </div>
      </div>
    </div>
  );
};

export const CampaignStatus = (props) => {
  const { campaign, user } = props;
  return (
    <div className="campaign-status column is-two-fifths">
      <div className="funding">FUNDING</div>
      <h1>{campaign.title}</h1>
      <h2>{campaign.tagline}</h2>
      <div className="campaign-user-details">
        <i className="fas fa-search"></i>
        <div>
          <NavLink
            className="campaign-user-name"
            to={`/users/${user.id}`}
          >{`${user.firstName} ${user.lastName}`}</NavLink>
          <div className="campaign-user-location">{`${user.city}, ${user.stateProvince}, ${user.country}`}</div>
        </div>
      </div>
      <Progress campaign={campaign}></Progress>
      <CampaignStatusButtons></CampaignStatusButtons>
    </div>
  );
};

const Progress = (props) => {
  const { campaign } = props;
  const { contributionsCount } = useSelector((state) => state.contributions);
  return (
    <div className="campaign-progress">
      <div className="campaign-contributions spaced-out">
        <div className="campaign-currentTotal">{`$${campaign.currentTotal} USD`}</div>
        <div className="campaign-num-contributions">{`${contributionsCount} backers`}</div>
      </div>
      <div className="campaign-progress-bar"> |||||||||||</div>
      <div className="campaign-goal spaced-out">
        <div className="campaign-goal-status">{`x% of $${campaign.campaignGoal} goal`}</div>
        <div className="days-left">{`x days left`}</div>
      </div>
    </div>
  );
};

const CampaignStatusButtons = () => {
  return (
    <div class="buttons are-medium">
      <button id="campaign-back-it" className="button is-focused ">
        {" "}
        BACK IT
      </button>
      <button id="campaign-follow" className="button is-focused ">
        <i className="far fa-heart follow-heart"></i>
        <span>FOLLOW</span>
      </button>
    </div>
  );
};

export const CampaignStory = (props) => {
  const { campaign } = props;
  return (
    <div className="column is-two-thirds ">
      <p className="campaign-story">{campaign.story}</p>
    </div>
  );
};

export const CampaignPerks = (props) => {
  const { campaign } = props;
  const { perks } = campaign;

  console.log("perks comp", campaign);
  return (
    <div className="column is-one-third">
      <h1>Campaign Perks</h1>
      <div className="tile is-ancestor campaign-perks-container">
        {perks.map((perk) => (
          <div className="tile is-vertical is-parent">
            <div className="is-child campaign-perk-box">
              <img
                className="campaign-perk-pic"
                src={campaign.campaignPic}
              ></img>
              <div className="campaign-perk-cost">{perk.perkCost}</div>
              <p className="campaign-perk">{perk.perk}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

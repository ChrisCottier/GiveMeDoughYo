import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { submitContribution } from "../../actions/contributions";
import { submitFollow } from "../../actions/follows";

export const CampaignPics = (props) => {
  const { campaign } = props;

  return (
    <div className="campaign-images column is-three-fifths">
      <figure className="image">
        <img
          className="campaign-pic"
          src={campaign.campaignPic}
          alt="Campaign pic"
        ></img>
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
  const { successfulContribution } = useSelector(
    (state) => state.contributions
  );

  const progress = Math.floor(
    (campaign.currentTotal / campaign.campaignGoal) * 100
  );
  let progressBar = progress;
  if (progress > 100) {
    progressBar = 100;
  }

  return (
    <div className="campaign-progress">
      <div className="campaign-contributions spaced-out">
        <div className="campaign-currentTotal">{`$${campaign.currentTotal} USD`}</div>
        <div className="campaign-num-contributions">{`${contributionsCount} contributions`}</div>
      </div>
      <div id="progress-bar">
        <div style={{ width: `${progressBar}%` }}></div>
      </div>
      <div className="campaign-goal spaced-out">
        <div className="campaign-goal-status">{`${progress}% of $${campaign.campaignGoal} goal`}</div>
        <div className="days-left">{`${campaign.daysLeft} days left`}</div>
      </div>
    </div>
  );
};

const ContributionModal = (props) => {
  const { showContribution, setShowContribution } = props;
  const { token } = useSelector((state) => state.auth);
  const { id, title } = useSelector((state) => state.campaigns.campaign);
  const { message, successfulContribution } = useSelector(
    (state) => state.contributions
  );
  const [contribution, setContribution] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!token) {
      setErrorMessage("You must be logged in to make a contribution");
      return;
    } else if (contribution <= 0) {
      setErrorMessage("Please write a valid contribtuion amount.");
      return;
    }
    dispatch(submitContribution(contribution, id, title, token));
  };

  const handleContribution = (event) => {
    setContribution(event.target.value);
  };

  let displayType;
  if (!showContribution) {
    displayType = "none";
  } else {
    displayType = "block";
  }

  let contributionMessage;

  if (successfulContribution === true) {
    contributionMessage = message;
  } else if (successfulContribution === false) {
    contributionMessage = message;
  }

  const modalOff = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (
      event.target.classList.contains("modal-background") ||
      event.target.classList.contains("cancel-contribution")
    ) {
      setShowContribution(false);
    }
  };

  return (
    <div className="modal" style={{ display: displayType }}>
      <div className="modal-background " onClick={modalOff}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Make Contribution</p>
        </header>
        <section className="modal-card-body">
          {errorMessage ? <div>{errorMessage}</div> : <></>}
          {contributionMessage ? <div>{contributionMessage}</div> : <></>}
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Amount</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input rounded"
                  type="number"
                  name="contribution"
                  value={contribution}
                  onChange={handleContribution}
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-dollar-sign"></i>
                </span>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" type="submit">
                  Contribute!
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-link is-light cancel-contribution"
                  onClick={modalOff}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

const CampaignStatusButtons = () => {
  const [showContribution, setShowContribution] = useState(false);
  const { id } = useParams();
  const [cantFollow, setCantFollow] = useState(false);
  const { follows, token, userId, followStatus } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    if (!follows) return;
    if (userFollowsCampaign(follows, followStatus, Number.parseInt(id))) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  }, [followStatus, follows]);

  const showModal = () => {
    setShowContribution(true);
  };

  const toggleFollow = () => {
    if (!token) {
      setCantFollow(true);
      return;
    }
    dispatch(submitFollow(userId, id, token));
  };
  return (
    <>
      <div className="buttons are-medium">
        <button
          id="campaign-back-it"
          className="button is-focused "
          onClick={showModal}
        >
          {" "}
          BACK IT
        </button>
        <button
          id="campaign-follow"
          className="button is-focused "
          onClick={toggleFollow}
        >
          {following ? (
            <i className="fas fa-heart follow-heart"></i>
          ) : (
            <i className="far fa-heart follow-heart"></i>
          )}
          <span>{following ? "FOLLOWING" : "FOLLOW"}</span>
        </button>
      </div>
      <ContributionModal
        showContribution={showContribution}
        setShowContribution={setShowContribution}
      ></ContributionModal>
    </>
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

  return (
    <div className="column is-one-third">
      <h1 className="campaign-perks-title campaign-bold">Campaign Perks</h1>
      <div className="tile is-ancestor campaign-perks-container">
        <div className="tile is-vertical is-parent">
          {perks.map((perk) => (
            <div key={perk.perk} className="is-child campaign-perk-box">
              <img
                className="campaign-perk-pic"
                src={campaign.campaignPic}
              ></img>
              <div className="campaign-perk-cost">{`$${perk.perkCost}`}</div>
              <p className="campaign-perk">{perk.perk}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const userFollowsCampaign = (followsArr, followStatus, campaignId) => {
  let following = false;
  for (let follow of followsArr) {
    if (follow.campaignId === campaignId) {
      following = true;
    }
  }

  if (followStatus) {
    if (
      Number.parseInt(followStatus.campaignId) === campaignId &&
      followStatus.followStatus === true
    ) {
      following = true;
    }
  }

  return following;
};

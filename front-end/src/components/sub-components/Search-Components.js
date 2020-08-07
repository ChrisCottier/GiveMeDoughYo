import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const SearchTile = (props) => {
  const { campaign } = props;
  const [goToCampaign, setGoToCampaign] = useState(false);

  const progress = Math.floor(
    (campaign.currentTotal / campaign.campaignGoal) * 100
  );
  let progressBar = progress;
  if (progress > 100) {
    progressBar = 100;
  }
  console.log("campaign", campaign);

  if (goToCampaign) {
    return <Redirect to={`/campaigns/${campaign.id}`}></Redirect>;
  }
  return (
    <div
      key={campaign.id}
      className="tile is-4 is-parent"
      onClick={() => setGoToCampaign(true)}
    >
      <div className="tile is-child box search-tile">
        <img src={campaign.campaignPic}></img>
        <div className="fund-follow card-apart">
          <span>Funding</span>
          <span>
            <i className="far fa-heart follow-heart"></i>
          </span>
        </div>
        <div className="title is-4">{campaign.title}</div>
        <div className="card-tagline subtitle is-6">{campaign.tagline}</div>
        <div className="card-category">{campaign.Category.name}</div>
        <div className="card-progress">
          <div className="fund-follow card-apart">
            <div>
              <span className="card-total">{`$${campaign.currentTotal} `}</span>
              <span className="card-currency">USD raised</span>
            </div>
            <div className="card-progress">{`${progress}%`}</div>
          </div>
        </div>
        <div id="card-progress-bar">
          <div style={{ width: `${progressBar}%` }}></div>
        </div>
        <div className="card-time-left">
          <i className="fas fa-clock"></i>
          <span>{`  ${campaign.daysLeft} days left`}</span>
        </div>
      </div>
    </div>
  );
};

export const SearchFilter = (props) => {
  const { setFilterCategory } = props;
  return (
    <div className="filter-menu">
      <div className="filter-title title is-5">Filter results</div>
      <div className="filter-subtitle subtitle is-6">Category</div>
      <CategoryMenu field="Tech and Innovation"></CategoryMenu>
      <CategoryMenu field="Creative"></CategoryMenu>
      <CategoryMenu field="Community"></CategoryMenu>
    </div>
  );
};

const CategoryMenu = (props) => {
  const { field } = props;
  const { categories } = useSelector((state) => state.categories);

  if (!categories) return null;

  return (
    <div>
      <div className="search-category-field">{field}</div>
      {categories.map((category) => {
        if (field === category.field) {
          return <div className="search-category-name">{category.name}</div>;
        } else {
          return <></>;
        }
      })}
    </div>
  );
};

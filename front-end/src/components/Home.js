import React from "react";
import { useSelector } from "react-redux";

import { appName } from "../config";
import { Banner } from "./sub-components/Home-Components";
import { SearchTile } from "./sub-components/Search-Components";
import "./styles/Home.css";

const Home = () => {
  const { newCampaigns, mostBacked } = useSelector((state) => state.home);

  return (
    <main className="splash-page">
      <div className='banner-container'>
        <Banner></Banner>
        <div className="banner-word-overlay">
          <div className="banner-title banner-words">{appName}</div>
          <div className="banner-words motto">Bring Your Ideas to Life</div>
        </div>
      </div>
      <div className="splash-container container is-widescreen">
        <div className="splash-new-campaigns">
          <h1 className="title is-3">New Campaigns</h1>
          <div className="new-campaigns-tiles mq">
            {newCampaigns ? (
              newCampaigns.map((campaign) => (
                <SearchTile key={campaign.id} campaign={campaign}></SearchTile>
              ))
            ) : (
              <></>
            )}
          </div>
          <h1 className="title is-3 splash-most-backed">Most Backed</h1>
          <div className="new-campaigns-tiles mq">
            {mostBacked ? (
              mostBacked.map((campaign) => (
                <SearchTile key={campaign.id} campaign={campaign}></SearchTile>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

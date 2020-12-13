import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";

import {CLEAR_CAMPAIGN_INFO} from '../actions/campaigns'
import "./styles/Campaign.css";
import { getCampaignInfo } from "../actions/campaigns";
import {
  CampaignPics,
  CampaignStatus,
  CampaignStory,
  CampaignPerks,
} from "./sub-components/Campaign-Components";
import Loading from './Loading'
import campaigns from "../reducers/campaigns";

const Campaign = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const campaign = useSelector((state) => state.campaigns.campaign);
  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(getCampaignInfo(id));
    return () => dispatch({type: CLEAR_CAMPAIGN_INFO})
  }, [id]);

  if (!campaign) {
    return <Loading></Loading>;
  }
  return (
    <main>
      <div className="campaign-page-container container is-widescreen">
        <div className="campaign-top columns is-5">
          <CampaignPics campaign={campaign}></CampaignPics>
          <CampaignStatus campaign={campaign} user={user}></CampaignStatus>
        </div>
        <div className="campaign-bottom columns is-5">
          <CampaignStory campaign={campaign}></CampaignStory>
          <CampaignPerks campaign={campaign}></CampaignPerks>
        </div>
      </div>
    </main>
  );
};

export default Campaign;

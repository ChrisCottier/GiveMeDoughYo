import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";

import { getCampaignInfo } from "../actions/campaigns";

const Campaign = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const campaign = useSelector((state) => state.campaigns.campaign);

  useEffect(() => {
    dispatch(getCampaignInfo(id));
  }, [id]);

  if (!campaign) {
    return null;
  }
  return (
    <main>
      <div className="campaign-page-container container is-widescreen">
        <div className="campaign-top columns">
          <div className="campaign-images column is-three-fifths">wow</div>
          <div className="margin-space column"></div>
          <div className="campaign-status column is-one-third">hi</div>
        </div>
      </div>
    </main>
  );
};

export default Campaign;

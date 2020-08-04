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
      <div>{campaign.title}</div>
    </main>
  );
};

export default Campaign;

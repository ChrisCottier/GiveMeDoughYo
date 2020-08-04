import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";

import { getCampaignInfo } from "../actions/campaigns";

const Campaign = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampaignInfo(id));
  }, [id]);

  return <div>Campaign Page</div>;
};

export default Campaign;

import { baseUrl } from "../config";

import { perksArray, daysLeft, getCampaignInfo } from "./campaigns";

export const SUCCESSFUL_CONTRIBUTION = "SUCCESSFUL_CONTRIBUTION";
export const FAILED_CONTRIBUTION = "FAILED_CONTRIBUTION";
export const RESET_CONTRIBUTION = "RESET_CONTRIBUTION"

const successfulContribution = (amount, title, campaign) => ({
  type: SUCCESSFUL_CONTRIBUTION,
  amount,
  title,
  campaign,
});

const failedContribution = (amount, title) => ({
  type: FAILED_CONTRIBUTION,
  amount,
  title,
});

export const submitContribution = (
  rawAmount,
  campaignId,
  title,
  token
) => async (dispatch) => {
  const amount = Math.floor(rawAmount);
  const res = await fetch(`${baseUrl}/contributions`, {
    method: "post",

    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ campaignId, amount }),
  });

  if (res.ok) {
    // const contribution = await res.json();
    const campaign = await res.json();
    campaign.daysLeft = daysLeft(campaign);
    campaign.perks = perksArray(campaign);

    dispatch(successfulContribution(amount, title, campaign));
    getCampaignInfo(campaignId)
  } else {
    // const fail = await res.json();

    dispatch(failedContribution(amount, title));
  }
};

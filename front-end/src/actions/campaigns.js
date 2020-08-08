import { baseUrl } from "../config";

export const CAMPAIGN_PAGE = "CAMPAIGN_PAGE";
export const SEARCHING = "SEARCHING";
export const DONE_SEARCHING = "DONE_SEARCHING";
export const MATCHING_CAMPAIGNS = "MATCHING_CAMPAIGNS";
export const CREATE_CAMPAIGN = "CREATE_CAMPAIGN";

const campaignPage = (campaignData) => ({
  type: CAMPAIGN_PAGE,
  campaignData,
});

const matches = (matchingCampaigns) => ({
  type: MATCHING_CAMPAIGNS,
  matchingCampaigns,
});

export const setSearching = () => ({
  type: SEARCHING,
});

export const doneSearching = () => ({
  type: DONE_SEARCHING,
});

export const getCampaignInfo = (id) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/campaigns/${id}`);
  const campaignData = await res.json();

  if (res.ok) {
    const perks = perksArray(campaignData);
    campaignData.perks = perks;
    const days = daysLeft(campaignData);
    campaignData.daysLeft = days;
    campaignData.Contributions = campaignData.Contributions.length;
    campaignData.Follows = campaignData.Follows.length;

    dispatch(campaignPage(campaignData));
  }
};

export const searchFor = (query, category) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/campaigns/search/${category}/${query}`);

  if (res.ok) {
    const matchingCampaigns = await res.json();
    for (let campaign of matchingCampaigns) {
      let days = daysLeft(campaign);
      campaign.daysLeft = days;
    }

    dispatch(matches(matchingCampaigns));
  }
};

export const submitCampaign = (campaign, campaignPic, token) => async (
  dispatch
) => {
  console.log(campaign);
  const res = await fetch(`${baseUrl}/campaigns`, {
    method: "post",

    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ campaign }),
  });

  if (res.ok) {
    const campaign = await res.json();
    if (campaignPic) {
      console.log(campaignPic);
      const data = new FormData();
      data.append("campaignPic", campaignPic);
      const res = await fetch(
        `${baseUrl}/campaigns/${campaign.id}/campaignPic`,
        {
          method: "post",

          headers: {
            Authorization: "Bearer " + token,
          },
          body: data,
        }
      );
      const updatedCampaign = await res.json();
      console.log("updated", updatedCampaign);
      dispatch({ type: CREATE_CAMPAIGN, successfulUpload: true });
    } else {
      dispatch({ type: CREATE_CAMPAIGN, successfulUpload: false });
    }
  }
};

function perksArray(campaignObj) {
  const perks = [];
  for (let i = 1; i <= 5; i++) {
    let perkNum = `perk${i}`;
    let perkCost = `perk${i}Cost`;
    if (campaignObj[perkNum]) {
      let perk = {
        perk: campaignObj[perkNum],
        perkCost: campaignObj[perkCost],
      };
      perks.push(perk);
    }
  }
  return perks;
}

function daysLeft(campaignObj) {
  const today = new Date();
  const then = new Date(campaignObj.createdAt);

  const dif = today.getTime() - then.getTime();

  const difDays = dif / (1000 * 60 * 60 * 24);
  let days = Math.floor(campaignObj.duration - difDays);

  if (days < 0) {
    days = 0;
  }

  return days;
}

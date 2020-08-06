import { baseUrl } from "../config";

export const CAMPAIGN_PAGE = "CAMPAIGN_PAGE";

export const SEARCH_PARAMS = "SEARCH_PARAMS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const SEARCHING = "SEARCHING";
export const DONE_SEARCHING = "DONE_SEARCHING";
export const MATCHING_CAMPAIGNS = "MATCHING_CAMPAIGNS";

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

export const setQueryAndCat = (currentSearchQuery, currentSearchCategory) => ({
  type: SEARCH_PARAMS,
  currentSearchQuery,
  currentSearchCategory,
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
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

    console.log("data", campaignData);

    dispatch(campaignPage(campaignData));
  }
};

export const searchFor = (query, category) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/campaigns/search/${category}/${query}`);

  if (res.ok) {
    const matchingCampaigns = await res.json();
    console.log("successful search", matchingCampaigns);
    dispatch(matches(matchingCampaigns));
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
  console.log(then);
  const dif = today.getTime() - then.getTime();

  const difDays = dif / (1000 * 60 * 60 * 24);
  let days = Math.floor(campaignObj.duration - difDays);

  if (days < 0) {
    days = 0;
  }

  return days;
}

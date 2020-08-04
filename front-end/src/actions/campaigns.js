import { baseUrl } from "../config";

export const CAMPAIGN_PAGE = "CAMPAIGN_PAGE";

const campaignPage = (campaignData) => ({
  type: CAMPAIGN_PAGE,
  campaignData,
});

export const getCampaignInfo = (id) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/campaigns/${id}`);
  const campaignData = await res.json();

  if (res.ok) {
    campaignData.Contributions = campaignData.Contributions.length;
    campaignData.Follows = campaignData.Follows.length;

    dispatch(campaignPage(campaignData));
  }
};

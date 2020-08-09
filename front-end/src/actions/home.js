import { baseUrl } from "../config";
import { daysLeft } from "./campaigns";

export const HOME_PICS = "HOME_PICS";

export const getHomePics = () => async (dispatch) => {
  console.log("action");
  const res = await fetch(`${baseUrl}/home/pics`);

  if (res.ok) {
    const { homePics, newCampaigns, mostBacked } = await res.json();
    console.log(mostBacked);
    for (let campaign of newCampaigns) {
      campaign.daysLeft = daysLeft(campaign);
    }
    for (let campaign of mostBacked) {
      campaign.daysLeft = daysLeft(campaign);
    }
    dispatch({ type: HOME_PICS, homePics, newCampaigns, mostBacked });
  }
};

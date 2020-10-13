import { USER_PAGE } from "../actions/users";

import {
  CAMPAIGN_PAGE,
  MATCHING_CAMPAIGNS,
  SEARCHING,
  DONE_SEARCHING,
  CREATE_CAMPAIGN,
  CLEAR_CAMPAIGN_INFO
} from "../actions/campaigns";
import { SUCCESSFUL_CONTRIBUTION } from "../actions/contributions";

const campaigns = (state = {}, action) => {
  switch (action.type) {
    case USER_PAGE: {
      return {
        ...state,
        campaigns: action.userData.Campaigns,
      };
    }

    case CREATE_CAMPAIGN: {
      return {
        ...state,
        successfulUpload: action.successfulUpload,
        newCampaignId: action.newCampaignId
      };
    }
    case SUCCESSFUL_CONTRIBUTION: {
      return {
        ...state,
        campaign: action.campaign,
      };
    }
    case CAMPAIGN_PAGE: {
      const {
        id,
        title,
        tagline,
        duration,
        campaignPic,
        otherPics,
        story,
        contactEmail,
        campaignGoal,
        currentTotal,
        perk1Cost,
        perk1,
        perk2Cost,
        perk2,
        perk3Cost,
        perk3,
        perk4Cost,
        perk4,
        perk5Cost,
        perk5,
        perks,
        urlPath,
        daysLeft,
      } = action.campaignData;
      return {
        ...state,
        newCampaignId: null,
        campaign: {
          id,
          title,
          tagline,
          duration,
          campaignPic,
          otherPics,
          story,
          contactEmail,
          campaignGoal,
          currentTotal,
          perk1Cost,
          perk1,
          perk2Cost,
          perk2,
          perk3Cost,
          perk3,
          perk4Cost,
          perk4,
          perk5Cost,
          perk5,
          perks,
          urlPath,
          daysLeft,
        },
      };
    }

    case CLEAR_CAMPAIGN_INFO: {
      return {
        ...state,
        campaign: null
      }
    }

    case MATCHING_CAMPAIGNS: {
      return {
        ...state,
        campaigns: action.matchingCampaigns,
      };
    }

    case SEARCHING: {
      return {
        ...state,
        searching: true,
      };
    }

    case DONE_SEARCHING: {
      return {
        ...state,
        searching: false,
      };
    }

    default:
      return state;
  }
};

export default campaigns;

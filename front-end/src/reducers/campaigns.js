import { USER_PAGE } from "../actions/users";

import {
  CAMPAIGN_PAGE,
  SEARCH_PARAMS,
  CLEAR_SEARCH,
  MATCHING_CAMPAIGNS,
  SEARCHING,
  DONE_SEARCHING,
} from "../actions/campaigns";

const campaigns = (state = {}, action) => {
  switch (action.type) {
    case USER_PAGE: {
      return {
        ...state,
        campaigns: action.userData.Campaigns,
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

    case SEARCH_PARAMS: {
      return {
        ...state,
        currentSearchQuery: action.currentSearchQuery,
        currentSearchCategory: action.currentSearchCategory,
      };
    }

    case CLEAR_SEARCH: {
      return {
        ...state,
        currentSearchCategory: null,
        currentSearchCategory: null,
      };
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

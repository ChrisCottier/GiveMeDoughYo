import { USER_PAGE } from "../actions/users";
import { CAMPAIGN_PAGE } from "../actions/campaigns";

const contributions = (state = {}, action) => {
  switch (action.type) {
    case USER_PAGE: {
      return {
        ...state,
        contributionsCount: action.userData.Contributions,
      };
    }
    case CAMPAIGN_PAGE: {
      return {
        ...state,
        contributionsCount: action.campaignData.Contributions,
      };
    }

    default:
      return state;
  }
};

export default contributions;

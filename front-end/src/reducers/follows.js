import { USER_PAGE } from "../actions/users";
import { CAMPAIGN_PAGE } from "../actions/campaigns";

const follows = (state = {}, action) => {
  switch (action.type) {
    case USER_PAGE: {
      return {
        ...state,
        follows: action.userData.Follows,
      };
    }
    case CAMPAIGN_PAGE: {
      return {
        ...state,
        FollowsCount: action.campaignData.Follows,
      };
    }
    default:
      return state;
  }
};

export default follows;

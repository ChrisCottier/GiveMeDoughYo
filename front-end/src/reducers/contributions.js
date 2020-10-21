import { USER_PAGE } from "../actions/users";
import { CAMPAIGN_PAGE } from "../actions/campaigns";
import {
  SUCCESSFUL_CONTRIBUTION,
  FAILED_CONTRIBUTION,
  RESET_CONTRIBUTION
} from "../actions/contributions";

const contributions = (state = {}, action) => {
  switch (action.type) {
    case USER_PAGE: {
      return {
        ...state,
        contributions: action.userData.Contributions,
      };
    }
    case CAMPAIGN_PAGE: {
      return {
        ...state,
        contributionsCount: action.campaignData.Contributions,
        successfulContribution: null,
        message: null,
      };
    }

    case SUCCESSFUL_CONTRIBUTION: {
      return {
        ...state,
        successfulContribution: true,
        message: `Contribution of $${action.amount} to ${action.title} was successful!`,
      };
    }

    case FAILED_CONTRIBUTION: {
      return {
        ...state,
        successfulContribution: false,
        message: `Contribution of $${action.amount} to ${action.title} was unsuccessful. Please contribute amount within your balance.`,
      };
    }
    case RESET_CONTRIBUTION: {
      return {
        ...state,
        successfulContribution: false
      }
    }

    default:
      return state;
  }
};

export default contributions;

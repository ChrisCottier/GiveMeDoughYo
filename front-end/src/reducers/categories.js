import { CAMPAIGN_PAGE } from "../actions/campaigns";

const categories = (state = {}, action) => {
  switch (action.type) {
    case CAMPAIGN_PAGE: {
      const { name } = action.campaignData.Category;
      return {
        ...state,
        category: name,
      };
    }

    default:
      return state;
  }
};

export default categories;

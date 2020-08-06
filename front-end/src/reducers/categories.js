import { CAMPAIGN_PAGE } from "../actions/campaigns";
import { CATEGORY_LIST } from "../actions/categories";

const categories = (state = {}, action) => {
  switch (action.type) {
    case CAMPAIGN_PAGE: {
      const { name } = action.campaignData.Category;
      return {
        ...state,
        category: name,
      };
    }

    case CATEGORY_LIST: {
      return {
        ...state,
        categories: action.categories,
      };
    }

    default:
      return state;
  }
};

export default categories;

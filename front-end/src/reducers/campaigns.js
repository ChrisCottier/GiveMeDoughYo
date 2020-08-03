import { USER_PAGE } from "../actions/users";

const campaigns = (state = {}, action) => {
  switch (action.type) {
    case USER_PAGE: {
      return {
        ...state,
        campaigns: action.userData.Campaigns,
      };
    }

    default:
      return state;
  }
};

export default campaigns;

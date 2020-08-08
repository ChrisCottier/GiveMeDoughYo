import { USER_PAGE } from "../actions/users";
import { CAMPAIGN_PAGE } from "../actions/campaigns";

const users = (state = {}, action) => {
  switch (action.type) {
    case USER_PAGE: {
      const {
        aboutMe,
        city,
        country,
        firstName,
        lastName,
        profilePic,
        id,
        shortDescription,
        stateProvince,
        balance,
      } = action.userData;
      return {
        ...state,
        user: {
          aboutMe,
          city,
          country,
          firstName,
          lastName,
          profilePic,
          id,
          shortDescription,
          stateProvince,
          balance,
        },
      };
    }
    case CAMPAIGN_PAGE: {
      const {
        city,
        country,
        firstName,
        lastName,
        profilePic,
        id,
        stateProvince,
      } = action.campaignData.User;
      return {
        ...state,
        user: {
          city,
          country,
          firstName,
          lastName,
          profilePic,
          id,
          stateProvince,
        },
      };
    }

    default:
      return state;
  }
};

export default users;

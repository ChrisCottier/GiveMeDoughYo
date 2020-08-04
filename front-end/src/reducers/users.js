import { USER_PAGE } from "../actions/users";
import { CAMPAIGN_PAGE } from "../actions/campaigns";

const users = (state = {}, action) => {
  switch (action.type) {
    case USER_PAGE: {
      const {
        aboutMe,
        avatar,
        city,
        country,
        firstName,
        lastName,
        profilePic,
        id,
        shortDescription,
        stateProvince,
      } = action.userData;
      return {
        ...state,
        user: {
          aboutMe,
          avatar,
          city,
          country,
          firstName,
          lastName,
          profilePic,
          id,
          shortDescription,
          stateProvince,
        },
      };
    }
    case CAMPAIGN_PAGE: {
      const {
        avatar,
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
          avatar,
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

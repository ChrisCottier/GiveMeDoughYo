import { SET_TOKEN, REMOVE_TOKEN } from "../actions/auth";
import { NEW_FOLLOW } from "../actions/follows";
const auth = (state = {}, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      console.log("set token", action);
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        firstName: action.firstName,
        profilePic: action.profilePic,
        follows: action.follows,
      };
    }
    case REMOVE_TOKEN: {
      return {
        ...state,
        token: null,
        userId: null,
        firstName: null,
        profilePic: null,
        follows: null,
      };
    }

    case NEW_FOLLOW: {
      return {
        ...state,
        follows: "removed",
        followStatus: {
          campaignId: action.campaignId,
          followStatus: action.followStatus,
        },
      };
    }

    default:
      return state;
  }
};

export default auth;

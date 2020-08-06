import { SET_TOKEN, REMOVE_TOKEN } from "../actions/auth";
const auth = (state = {}, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        firstName: action.firstName,
        profilePic: action.profilePic,
      };
    }
    case REMOVE_TOKEN: {
      return {
        ...state,
        token: null,
        userId: null,
        firstName: null,
        profilePic: null,
      };
    }

    default:
      return state;
  }
};

export default auth;

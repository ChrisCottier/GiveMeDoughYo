import { SET_TOKEN, REMOVE_TOKEN } from "../actions/auth";
const auth = (state = {}, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case REMOVE_TOKEN: {
      return {
        ...state,
        token: null,
      };
    }

    default:
      return state;
  }
};

export default auth;

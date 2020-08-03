import { SET_TOKEN, REMOVE_TOKEN } from "../actions/auth";
const auth = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    }
    case REMOVE_TOKEN: {
      return {
        ...state,
        token: null,
        userId: null,
      };
    }

    default:
      return state;
  }
};

export default auth;

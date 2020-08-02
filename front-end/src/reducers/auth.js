import { SET_TOKEN } from "../actions/auth";
const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }

    default:
      return state;
  }
};

export default authReducer;

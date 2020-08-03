import { USER_PAGE } from "../actions/users";

const follows = (state = {}, action) => {
  switch (action.type) {
    case USER_PAGE: {
      return {
        ...state,
        follows: action.userData.Follows,
      };
    }

    default:
      return state;
  }
};

export default follows;

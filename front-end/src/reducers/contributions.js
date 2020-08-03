import { USER_PAGE } from "../actions/users";

const contributions = (state = {}, action) => {
  switch (action.type) {
    case USER_PAGE: {
      return {
        ...state,
        contributionsCount: action.userData.Contributions,
      };
    }

    default:
      return state;
  }
};

export default contributions;

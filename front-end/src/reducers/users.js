import { USER_PAGE } from "../actions/users";
const users = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case USER_PAGE: {
      return {
        ...state,
        user: action.userData,
      };
    }

    default:
      return state;
  }
};

export default users;

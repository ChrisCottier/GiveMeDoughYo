import { USER_PAGE } from "../actions/users";

const users = (state = {}, action) => {
  console.log(action);
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

    default:
      return state;
  }
};

export default users;

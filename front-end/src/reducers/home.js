import { HOME_PICS, CURRENT_INDEX } from "../actions/home";

const home = (state = { currentIndex: 0 }, action) => {
  switch (action.type) {
    case HOME_PICS: {
      return {
        ...state,
        homePics: action.homePics,
      };
    }
    case CURRENT_INDEX: {
      console.log(action);
      return {
        ...state,
        currentIndex: action.currentIndex,
      };
    }

    default:
      return state;
  }
};

export default home;

import { HOME_PICS } from "../actions/home";

const home = (state = { currentIndex: 0 }, action) => {
  switch (action.type) {
    case HOME_PICS: {
      return {
        ...state,
        homePics: action.homePics,
        newCampaigns: action.newCampaigns,
        mostBacked: action.mostBacked,
      };
    }

    default:
      return state;
  }
};

export default home;

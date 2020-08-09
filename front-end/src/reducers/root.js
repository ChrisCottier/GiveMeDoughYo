import { combineReducers } from "redux";

import auth from "./auth";
import users from "./users";
import campaigns from "./campaigns";
import follows from "./follows";
import contributions from "./contributions";
import categories from "./categories";
import home from "./home";

const rootReducer = combineReducers({
  auth,
  users,
  campaigns,
  follows,
  contributions,
  categories,
  home: home,
});

export default rootReducer;

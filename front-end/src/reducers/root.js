import { combineReducers } from "redux";

import auth from "./auth";
import users from "./users";
import campaigns from "./campaigns";
import follows from "./follows";
import contributions from "./contributions";
import categories from "./categories";

const rootReducer = combineReducers({
  auth,
  users,
  campaigns,
  follows,
  contributions,
  categories,
});

export default rootReducer;

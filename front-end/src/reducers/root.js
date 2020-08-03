import { combineReducers } from "redux";

import auth from "./auth";
import users from "./users";
import campaigns from "./campaigns";
import follows from "./follows";
import contributions from "./contributions";

const rootReducer = combineReducers({
  auth,
  users,
  campaigns,
  follows,
  contributions,
});

export default rootReducer;

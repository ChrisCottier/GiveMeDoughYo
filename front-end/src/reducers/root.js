import { combineReducers } from "redux";

import auth from "./auth";
import users from "./users";

const rootReducer = combineReducers({
  auth,
  users,
});

export default rootReducer;

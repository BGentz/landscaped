import login from "./login";
import counter from "./counter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  login,
  counter,
});

export default rootReducer;

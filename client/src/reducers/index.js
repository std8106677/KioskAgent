import { combineReducers } from "redux";
import UserReducer from "./reducer_user";
import PageReducer from "./reducer_page";

const rootReducer = combineReducers({
  page: PageReducer,
  user: UserReducer,
});

export default rootReducer;

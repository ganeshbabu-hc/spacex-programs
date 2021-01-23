import { combineReducers } from "redux";
import filter from "./filter";
import message from "./message";
import launch from "./search";

export default combineReducers({
  filter,
  message,
  launch
});

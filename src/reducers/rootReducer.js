import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import whiteReducer from "./whiteReducer";
import blackReducer from "./blackReducer";
import colorReducer from "./colorReducer";

export default combineReducers({
  gameReducer,
  whiteReducer,
  blackReducer,
  colorReducer
});

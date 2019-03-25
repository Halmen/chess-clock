import * as actionTypes from "../actions/actionTypes";

export default (state = { color: "white" }, action) => {
  switch (action.type) {
    case actionTypes.SET_COLOR:
      return {
        color: action.payload
      };
    default:
      return state;
  }
};

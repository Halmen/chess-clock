import * as actionTypes from "../actions/actionTypes";

export default (state = { btime: 15 }, action) => {
  switch (action.type) {
    case actionTypes.SET_BLACK_TIMER:
      return {
        btime: action.payload
      };
    default:
      return state;
  }
};

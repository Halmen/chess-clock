import * as actionTypes from "../actions/actionTypes";

export default (state = { wtime: 15 }, action) => {
  switch (action.type) {
    case actionTypes.SET_WHITE_TIMER:
      return {
        wtime: action.payload
      };
    default:
      return state;
  }
};

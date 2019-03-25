import * as actionTypes from "../actions/actionTypes";

export default (state = { status: false }, action) => {
  switch (action.type) {
    case actionTypes.SET_GAME:
      return {
        status: action.payload
      };
    default:
      return state;
  }
};

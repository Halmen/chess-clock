import * as actionTypes from "./actionTypes";

export const setGame = status => dispatch => {
  dispatch({
    type: actionTypes.SET_GAME,
    payload: status
  });
};

export const setWTimer = wtime => dispatch => {
  dispatch({
    type: actionTypes.SET_WHITE_TIMER,
    payload: wtime
  });
};

export const setBTimer = btime => dispatch => {
  dispatch({
    type: actionTypes.SET_BLACK_TIMER,
    payload: btime
  });
};

export const setColor = color => dispatch => {
  dispatch({
    type: actionTypes.SET_COLOR,
    payload: color
  });
};

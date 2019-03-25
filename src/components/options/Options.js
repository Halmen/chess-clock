import React from "react";
import TimeSetter from "./TimeSetter";
import Color from "./Color";
import { connect } from "react-redux";
import { setGame } from "./../../actions/chessAction";

const mapDispatchToProps = dispatch => ({
  setGame: status => dispatch(setGame(status))
});

const mapStateToProps = state => ({
  ...state
});

const Options = props => {
  return (
    <div className="options">
      <Color />
      <h2>Set minutes for players</h2>
      <div className="minutes">
        <TimeSetter color={"white"} />
        <TimeSetter color={"black"} />
      </div>
      <div className="button" onClick={() => props.setGame(true)}>
        <p className="btnText">READY?</p>
        <div className="btnTwo">
          <p className="btnText2">START!</p>
        </div>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);

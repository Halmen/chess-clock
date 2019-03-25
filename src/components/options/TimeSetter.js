import React from "react";
import { connect } from "react-redux";
import { setWTimer, setBTimer } from "../../actions/chessAction";
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => ({
  setWTimer: wtime => dispatch(setWTimer(wtime)),
  setBTimer: btime => dispatch(setBTimer(btime))
});

const mapStateToProps = state => ({
  ...state
});

const Validate = value => {
  if (value > 0) {
    return value;
  } else {
    return Math.abs(value);
  }
};

const TimeSetter = props => {
  return (
    <div>
      <label className="options-lable">{props.color} player :</label>
      <input
        className="options-input"
        name="time"
        value={
          props.color === "white"
            ? props.whiteReducer.wtime
            : props.blackReducer.btime
        }
        onChange={e =>
          props.color === "white"
            ? props.setWTimer(Validate(e.target.value))
            : props.setBTimer(Validate(e.target.value))
        }
        type="number"
        min="1"
      />
    </div>
  );
};

TimeSetter.propTypes = {
  color: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeSetter);

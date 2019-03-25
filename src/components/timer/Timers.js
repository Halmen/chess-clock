import React from "react";
import { connect } from "react-redux";
import { setGame } from "../../actions/chessAction";
import Countdown from "react-countdown-now";
import WhiteTimeComponent from "./WhiteTimeComponent";
import BlackTimeComponent from "./BlackTimeComponent";
import ticSound from "../../assets/tick.wav";
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => ({
  setGame: status => dispatch(setGame(status))
});

const mapStateToProps = state => ({
  ...state
});

let api1, api2;
const audio = new Audio(ticSound);

const endGame = () => {
  api1.pause();
  api2.pause();
};

const playWarning = time => {
  if (time.minutes < 1 && time.seconds < 30) {
    audio.play();
  }
};

const switchTurn = () => {
  if (api1 && api2) {
    if (api1.isPaused()) {
      api2.pause();
      api1.start();
    } else if (api2.isPaused()) {
      api1.pause();
      api2.start();
    }
  } else {
    console.log("ERROR: Couldn't receive Coutdown API");
  }
};

const Timers = props => {
  return (
    <div>
      <Countdown
        ref={api => (api1 = api)}
        date={props.date + props.whiteReducer.wtime * 60000}
        intervalDelay={0}
        precision={1}
        renderer={WhiteTimeComponent}
        onTick={time => playWarning(time)}
        autoStart={props.colorReducer.color === "white"}
      />
      <div className="timer_buttons">
        <button onClick={() => props.setGame(false)}> New game</button>
        <button onClick={() => switchTurn()}>Switch/Break over</button>
        <button onClick={() => endGame()}> Bathroom break </button>
      </div>
      <Countdown
        ref={api => (api2 = api)}
        date={props.date + props.blackReducer.btime * 60000}
        intervalDelay={0}
        precision={1}
        renderer={BlackTimeComponent}
        onTick={time => playWarning(time)}
        autoStart={props.colorReducer.color === "black"}
      />
    </div>
  );
};

Timers.propTypes = {
  date: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timers);

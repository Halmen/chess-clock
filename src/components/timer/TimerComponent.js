import React from "react";

const Completionist = props => (
  <div className={props.player + "_game_over"}>
    <p>You're dead ;)! </p>
  </div>
);

const TimerElement = props => (
  <div className={props.player + "_timer"}>
    <div className="flex-container">
      <span className="flex-item">{props.minutes}</span>
      {!props.paused ? <span className="delimiter">:</span> : null}
      <span className="flex-item">{props.seconds}</span>
      {!props.paused ? <span className="delimiter">:</span> : null}
      <span className="flex-item">{props.milliseconds}</span>
    </div>
    {!props.paused ? (
      <div className="load-bar">
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    ) : null}
  </div>
);

const TimeComponent = ({
  minutes,
  seconds,
  milliseconds,
  completed,
  api,
  player
}) => {
  if (completed) {
    return <Completionist player={player} />;
  }
  return (
    <TimerElement
      player={player}
      minutes={minutes}
      seconds={seconds}
      milliseconds={milliseconds}
      paused={api.isPaused()}
    />
  );
};

export default TimeComponent;

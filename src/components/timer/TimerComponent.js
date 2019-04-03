import React from "react";

const Completionist = props => (
  <div className={props.player + "_game_over"}>
    <h1>You're dead ;)! </h1>
  </div>
);

const TimerElement = props => (
  <div className={props.player + "_timer"}>
    <ul className="flex-container">
      <li className="flex-item">{props.minutes}</li>
      {!props.paused ? <li className="delimiter">:</li> : null}
      <li className="flex-item">{props.seconds}</li>
      {!props.paused ? <li className="delimiter">:</li> : null}
      <li className="flex-item">{props.milliseconds}</li>
    </ul>
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
      paused={false}
    />
  );
};

export default TimeComponent;

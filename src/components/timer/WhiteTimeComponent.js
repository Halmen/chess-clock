import React from "react";

const Completionist = () => (
  <div className="white_game_over">
    <h1>You're dead ;)! </h1>
  </div>
);

const TimerElement = props => (
  <div className="white_timer">
    {!props.paused ? (
      <div className="load-bar">
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    ) : null}
    <ul className="flex-container">
      <li className="flex-item">{props.minutes}</li>
      {!props.paused ? <li className="delimiter">:</li> : null}
      <li className="flex-item">{props.seconds}</li>
      {!props.paused ? <li className="delimiter">:</li> : null}
      <li className="flex-item">{props.milliseconds}</li>
    </ul>
  </div>
);

const TimeComponent = ({ minutes, seconds, milliseconds, completed, api }) => {
  if (completed) {
    return <Completionist />;
  } else if (api.isPaused()) {
    return (
      <TimerElement
        minutes={minutes}
        seconds={seconds}
        milliseconds={milliseconds}
        paused={true}
      />
    );
  } else {
    return (
      <TimerElement
        minutes={minutes}
        seconds={seconds}
        milliseconds={milliseconds}
        paused={false}
      />
    );
  }
};

export default TimeComponent;

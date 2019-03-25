import React from "react";
import Timers from "./timer/Timers";
import Options from "./options/Options";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state
});

const App = props => {
  return (
    <div className="App ">
      {!props.gameReducer.status ? (
        <div>
          <Options />
        </div>
      ) : (
        <div>
          <Timers date={Date.now()} />
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(App);

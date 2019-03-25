import React from "react";
import { connect } from "react-redux";
import { setColor } from "../../actions/chessAction";
import checked from "../../assets/checked.svg";

const mapDispatchToProps = dispatch => ({
  setColor: color => dispatch(setColor(color))
});

const mapStateToProps = state => ({
  ...state
});

const Color = props => {
  return (
    <div className="colors">
      <h2>Set first player</h2>
      <div>
        <input
          id="color-1"
          type="radio"
          name="color"
          value="color-1"
          checked={props.colorReducer.color === "white"}
          onChange={() => props.setColor("white")}
        />
        <label htmlFor="color-1">
          <span>
            <img src={checked} alt="Checked Icon" />
          </span>
        </label>
      </div>

      <input
        id="color-2"
        type="radio"
        name="color"
        value="color-2"
        checked={props.colorReducer.color === "black"}
        onChange={() => props.setColor("black")}
      />
      <label htmlFor="color-2">
        <span>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
            alt="Checked Icon"
          />
        </span>
      </label>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color);

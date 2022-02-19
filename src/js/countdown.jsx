import React from "react";
import { START_DATE, default as Timer } from "./timer.jsx";

function Countdown() {
  var units = ["d", "h", "m", "s"];
  var timeline = [];
  for (var i = 0; i < 4; i++) {
    timeline.push(<TimerUnit unit={units[i]} key={i} />);
  }
  return (
    <div id="countdown" className="section">
      <Timer />
      <hr />
      <div className="timeUnits">{timeline}</div>
      <h1 id="countdown-heading">
        Until <span id="countdown-desc">hacking</span> {new Date() < START_DATE ? "starts" : "ends"}!
      </h1>
    </div>
  );
}

class TimerUnit extends React.Component {
  render() {
    return (
      <div className="timeUnit">
        <svg>
          <circle />
        </svg>
        <br />
        {this.props.unit}
      </div>
    );
  }
}

export default Countdown;
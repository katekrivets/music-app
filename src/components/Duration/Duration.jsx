import React from "react";

function Duration(props) {
  return (
    <div>
      {props.track.duration.hours === 0
        ? props.track.duration.minutes + ":" + props.track.duration.seconds
        : props.track.duration.hours +
          ":" +
          props.track.duration.minutes +
          ":" +
          props.track.duration.seconds}
    </div>
  );
}

export default Duration;

function parseDurationToString(props) {
  return (
    <div>
      {props.duration.hours === 0
        ? props.duration.minutes + ":" + props.duration.seconds
        : props.duration.hours +
          ":" +
          props.duration.minutes +
          ":" +
          props.duration.seconds}
    </div>
  );
}

export default parseDurationToString;

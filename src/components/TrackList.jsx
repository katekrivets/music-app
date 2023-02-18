import React from "react";
import "./trackList.css";
import TrackListItem from "./TrackListItem";

function TrackList(props) {
  return (
    <div className="track-block">
      {props.itemsArray.map((item) => (
        <TrackListItem track={item} key={item.id} />
      ))}
    </div>
  );
}

export default TrackList;

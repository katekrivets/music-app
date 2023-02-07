import React from "react";
import songs from "./songs";
import "./trackList.css";
import populateSongsWithTime from "./utils/populateSongsWithTime.js";
import TrackListItem from "./TrackListItem";

function TrackList() {
  const itemsArray = React.useMemo(
    () => populateSongsWithTime(songs.tracks.items),
    [songs.tracks.items]
  );
  return (
    <div className="track-block">
      {itemsArray.map((item) => (
        <TrackListItem track={item} key={item.id} />
      ))}
      ;
    </div>
  );
}

export default TrackList;

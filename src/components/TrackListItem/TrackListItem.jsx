import { React } from "react";
import { Link } from "react-router-dom";
import "./trackListItem.css";
import { GrPlayFill } from "react-icons/gr";
import parseDurationToString from "../utils/parseDurationToString.js";
function TrackListItem(props) {
  return (
    <div className="track-list-item">
      <div className="left-part-of-item">
        <div
          className="music-icon"
          style={{
            backgroundImage: `url(${props.track.album.images[2].url})`,
          }}
        >
          <button className="music-button">
            <GrPlayFill />
          </button>
        </div>
        <div>
          <div>
            <div className="track-album-block">
              <Link to={props.track.id} className="link">
                {props.track.name}
              </Link>
              <span> - </span>
              <Link to={`/album/${props.track.album.id}`} className="link">
                {" "}
                {props.track.album.name}
              </Link>
            </div>
            <div className="artist">
              {props.track.album.artists.map((artist) => (
                <Link
                  to={`/artist/${artist.id}`}
                  className="link"
                  key={artist.id}
                >
                  {artist.name}{" "}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="time">{parseDurationToString(props.track)}</div>
    </div>
  );
}
export default TrackListItem;

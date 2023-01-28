import React, { Component } from "react";
import { Link } from "react-router-dom";
import songs from "./songs";
import "./trackList.css";
import { GrPlayFill } from "react-icons/gr";

import songDuration from "./utils/time.js";
const itemsArray = Object.keys(songs.tracks.items);
class TrackList extends Component {
  render() {
    return (
      <div className="track-block">
        {itemsArray.map((item) => (
          <ul type="none" className="track-list-item">
            <div className="left-part-of-item">
              <div
                className="music-icon"
                style={{
                  backgroundImage: `url(${songs.tracks.items[item].album.images[2].url})`,
                }}
              >
                <button className="music-button">
                  <GrPlayFill />
                </button>
              </div>
              <div key={songs.tracks.items[item].id}>
                <div>
                  <div className="track-album-block">
                    <Link to={songs.tracks.items[item].id} className="link">
                      {songs.tracks.items[item].name}
                    </Link>
                    <span> - </span>
                    <Link
                      to={`/album/${songs.tracks.items[item].album.id}`}
                      className="link"
                    >
                      {" "}
                      {songs.tracks.items[item].album.name}
                    </Link>
                  </div>
                  <div className="artist">
                    {songs.tracks.items[item].album.artists.map((artist) => (
                      <Link to={`/artist/${artist.id}`} className="link">
                        {artist.name}{" "}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="time">
              {songDuration(songs.tracks.items[item].duration_ms).hours === 0
                ? songDuration(songs.tracks.items[item].duration_ms).minutes +
                  ":" +
                  songDuration(songs.tracks.items[item].duration_ms).seconds
                : songDuration(songs.tracks.items[item].duration_ms).hours +
                  ":" +
                  songDuration(songs.tracks.items[item].duration_ms).minutes +
                  ":" +
                  songDuration(songs.tracks.items[item].duration_ms).seconds}
            </div>
          </ul>
        ))}
      </div>
    );
  }
}
export default TrackList;

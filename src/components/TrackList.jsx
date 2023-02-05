import React, { Component } from "react";
import { Link } from "react-router-dom";
import songs from "./songs";
import "./trackList.css";
import { GrPlayFill } from "react-icons/gr";
import populateSongsWithTime from "./utils/populateSongsWithTime.js";

const itemsArray = songs.tracks.items;

class TrackList extends Component {
  render() {
    return (
      <div className="track-block">
        {itemsArray.map(
          (item) => (
            populateSongsWithTime(item, item.duration_ms),
            (
              <div className="track-list-item">
                <div className="left-part-of-item">
                  <div
                    className="music-icon"
                    style={{
                      backgroundImage: `url(${item.album.images[2].url})`,
                    }}
                  >
                    <button className="music-button">
                      <GrPlayFill />
                    </button>
                  </div>
                  <div key={item.id}>
                    <div>
                      <div className="track-album-block">
                        <Link to={item.id} className="link">
                          {item.name}
                        </Link>
                        <span> - </span>
                        <Link to={`/album/${item.album.id}`} className="link">
                          {" "}
                          {item.album.name}
                        </Link>
                      </div>
                      <div className="artist">
                        {item.album.artists.map((artist) => (
                          <Link to={`/artist/${artist.id}`} className="link">
                            {artist.name}{" "}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="time">
                  {item.duration.hours === 0
                    ? item.duration.minutes + ":" + item.duration.seconds
                    : item.duration.hours +
                      ":" +
                      item.duration.minutes +
                      ":" +
                      item.duration.seconds}
                </div>
              </div>
            )
          )
        )}
      </div>
    );
  }
}
export default TrackList;

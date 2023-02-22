import React from "react";
import { useParams } from "react-router-dom";
import "./track.css";
import Actions from "../Actions/Actions.jsx";
import parseDurationToString from "../utils/parseDurationToString.js";
import { GrPlayFill } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
function Track(props) {
  const { trackId } = useParams();
  const trackArray = props.itemsArray.filter((itm) => itm.id === trackId);
  const trackObject = trackArray[0];
  return (
    <div className="track-component">
      <div className="exact-track-block">
        <div
          className="image-block"
          style={{
            backgroundImage: `url(${trackObject.album.images[1].url} )`,
          }}
        ></div>
        <div className="description-of-track">
          <div className="top-description">
            <div className="track-name-box">
              <div className="track-name">{trackObject.name}</div>
              <div>
                {trackObject.album.artists.map((artist) => artist.name)}
              </div>
            </div>
            <Actions />
          </div>
          <div className="bottom-description">
            <div className="play-track">
              <div className="play-button">
                <button className="mobile-view-button">
                  <GrPrevious />
                </button>
                <button className="play-icon">
                  <GrPlayFill />
                </button>
                <button className="mobile-view-button">
                  <GrNext />
                </button>
              </div>
              <div className="play-track-text">
                {trackObject.album.artists.map((artist) => artist.name)} -{" "}
                {trackObject.name}
              </div>
            </div>
            <div className="time">{parseDurationToString(trackObject)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;

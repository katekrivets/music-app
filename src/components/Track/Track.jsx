import React from "react";
import { useParams } from "react-router-dom";
import "./track.css";
import Actions from "../Actions/Actions.jsx";
import Duration from "../Duration/Duration.jsx";
import { GrPlayFill } from "react-icons/gr";
function Track(props) {
  const { userId } = useParams();
  const trackArray = props.itemsArray.filter((itm) => itm.id === userId);
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
                <button>
                  <GrPlayFill />
                </button>
              </div>
              <div>
                {trackObject.album.artists.map((artist) => artist.name)} -{" "}
                {trackObject.name}
              </div>
            </div>
            <div className="time">
              <Duration track={trackObject} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;

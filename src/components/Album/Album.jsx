import React from "react";
import { useParams } from "react-router-dom";
import "./album.css";
import Duration from "../Duration/Duration.jsx";
import Actions from "../Actions/Actions.jsx";
function Album(props) {
  const { albumId } = useParams();
  const albumArray = props.itemsArray.filter((itm) => itm.album.id === albumId);

  const albumObject = albumArray[0];
  let i = 0;
  return (
    <div className="album-component">
      <div className="album-top-box">
        <div
          className="album-image-block"
          style={{
            backgroundImage: `url(${albumObject.album.images[1].url})`,
          }}
        ></div>
        <div className="album-description">
          <div className="top-album-description">
            <div className="album-name">{albumObject.album.name}</div>
            <div className="artist">{albumObject.artists[0].name}</div>
          </div>
          <Actions />
          <div className="album-actions"></div>
        </div>
      </div>
      <div className="album-track-container">
        {albumArray.map((item) => (
          <div className="album-track-box" key={item.id}>
            <div className="album-track">
              <div className="number">{(i = i + 1)}</div>
              <span>{item.artists.map((artist) => artist.name)}</span> -{" "}
              {item.name}
            </div>
            <div className="time">
              <Duration track={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Album;

import React from "react";
import { useParams } from "react-router-dom";
import "./album.css";
import parseDurationToString from "../utils/parseDurationToString";
import Actions from "../Actions/Actions";
function Album(props: any) {
  const { albumId } = useParams();
  const tracksInAlbumArray = props.itemsArray.filter(
    (itm: any) => itm.album.id === albumId
  ); //название более длинное,чем обсуждали, так как переменная trackArray есть уже в другом файле
  console.log(tracksInAlbumArray);
  const firstTrackInAlbum = tracksInAlbumArray[0];
  return (
    <div className="album-component">
      <div className="album-top-box">
        <div
          className="album-image-block"
          style={{
            backgroundImage: `url(${firstTrackInAlbum.album.images[1].url})`,
          }}
        ></div>
        <div className="album-description">
          <div className="top-album-description">
            <div className="album-name">{firstTrackInAlbum.album.name}</div>
            <div className="artist">{firstTrackInAlbum.artists[0].name}</div>
          </div>
          <Actions />
          <div className="album-actions"></div>
        </div>
      </div>
      <div className="album-track-container">
        {tracksInAlbumArray.map((item: any, index: number) => (
          <div className="album-track-box" key={item.id}>
            {item.artists.map((artist: any) => (
              <div className="album-track" key={artist.id}>
                <div className="number">{index + 1}</div>
                <div>
                  {" "}
                  <span>{artist.name + " "} </span> - {item.name}
                </div>
              </div>
            ))}
            <div className="time">{parseDurationToString(item)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Album;

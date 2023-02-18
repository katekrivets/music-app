import React from "react";
import { useParams } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import { GrPlayFill } from "react-icons/gr";
import "./artist.css";
import TrackListItem from "../TrackListItem/TrackListItem.jsx";
function Artist(props) {
  const { artistId } = useParams();
  const albumArtistArray = props.itemsArray.filter(
    (itm) => itm.artists[0].id === artistId
  );
  const albumArtistObject = albumArtistArray[0].artists[0];
  return (
    <div className="artist-component">
      <div className="artist-image-box">
        <div className="artist-name">{albumArtistObject.name}</div>
        <div className="artist-actions">
          <button className="button">
            <GrAdd />
            Подписаться
          </button>
          <button className="button">
            <GrPlayFill />
            Слушать
          </button>
        </div>
      </div>
      <h1>Популярное</h1>
      <div className="popular-songs">
        {props.itemsArray.map((item) => (
          <TrackListItem track={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
export default Artist;

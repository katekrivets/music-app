import React from "react";
import { useParams } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import { GrPlayFill } from "react-icons/gr";
import "./artist.css";
import TrackListItem from "../TrackListItem/TrackListItem";
function Artist(props) {
  const { artistId } = useParams();
  const albumArtistArray = props.itemsArray.filter((itm) =>
    itm.artists.map((artist) => artist.id.includes(artistId))
  );
  console.log(albumArtistArray);
  const albumArtistObject = albumArtistArray.find((element) =>
    element.artists.map((el) => el.id === artistId)
  );
  console.log(albumArtistObject);
  return (
    <div className="artist-component">
      <div className="artist-image-box">
        <div className="artist-name">{albumArtistObject.artists[0].name}</div>
        <div className="artist-actions">
          <button className="button  grey-button">
            <GrAdd />
            <span className="text-in-button">Подписаться</span>
          </button>
          <button className="button">
            <GrPlayFill />
            <span className="text-in-button">Cлушать</span>
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

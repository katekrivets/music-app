import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import { GrPlayFill } from "react-icons/gr";
import "./artist.css";
import TrackListItem from "../TrackListItem/TrackListItem";
import { getArtistById } from "../../api";
import { getTrackByArtistId } from "../../api";
import Loader from "../../loader/loader";
import populateSongsWithTime from "../utils/populateSongsWithTime";
type MyParams = {
  artistId: string;
};
function Artist(props: any) {
  const { artistId } = useParams<keyof MyParams>() as MyParams;
  const [artistObject, setArtistObject] = useState<any>();
  const [tracksArray, setTracksArray] = useState<any>();
  const [isLoading, setIsLoading] = useState<any>(true);

  React.useEffect(() => {
    const getArtist = getArtistById(artistId).then((result) => {
      console.log(result);
      if (result.artists.length === 0) {
        setArtistObject("NO MATCHES FOUND");
      } else {
        setArtistObject(result.artists[0].name);
        console.log(result.artists[0].name);
      }
    });
    const getTrack = getTrackByArtistId(artistId).then((res: any) => {
      console.log(res);
      setTracksArray(populateSongsWithTime(res.recordings));
      props.itemsArrayChange(populateSongsWithTime(res.recordings));
    });
    //после выполнения обоих запросов исключаем loader
    Promise.all([getArtist, getTrack]).then((r) => {
      setIsLoading(false);
    });
  }, [artistId]);

  console.log(tracksArray);

  if (isLoading === true) {
    return <Loader />;
  } else {
    return (
      <div className="artist-component">
        <div className="artist-image-box">
          <div className="artist-name">{artistObject}</div>
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
          {tracksArray.map((item: any) => (
            <TrackListItem track={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Artist;

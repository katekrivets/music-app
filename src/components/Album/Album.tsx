import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./album.css";
import parseDurationToString from "../utils/parseDurationToString";
import Actions from "../Actions/Actions";
import { getAlbumById } from "../../api";
import Loader from "../../loader/loader";
import populateSongsWithTime from "../utils/populateSongsWithTime";
import { Link } from "react-router-dom";
type MyParams = {
  albumId: string;
};
function Album(props: { itemsArray: any[] }) {
  const { albumId } = useParams<keyof MyParams>() as MyParams;
  const [albumObject, setAlbumObject] = useState<any>();
  const [artistName, setartistName] = useState<any>();
  const [isLoading, setIsLoading] = useState<any>(true);
  const [url, setUrl] = useState<any>(null);

  React.useEffect(() => {
    getAlbumById(albumId)
      .then((result) => {
        setAlbumObject(result);
        return result;
      })
      .then((res) => {
        return fetch(`https://coverartarchive.org/release/${res.id}/front`)
          .then((response) => {
            if (response.status === 404) {
              console.log("SUCCESS", response.status);
              setUrl(`./musicplaceholder.jpg`);
            } else {
              setUrl(response.url);
            }
          })
          .catch((err) => console.log(err));
      })
      .then((r) => {
        setIsLoading(false);
        //в типизации нет имени артиста, пришлось залезть в itemsArray
        const exactItemById = props.itemsArray.find(
          (item) => item.releases[0].id === albumId
        );
        console.log(props.itemsArray);
        setartistName(exactItemById["artist-credit"][0].name);
      });
  }, [albumId]);

  if (isLoading === true) {
    return <Loader />;
  } else {
    const tracksArrayWithTime = populateSongsWithTime(
      albumObject.media[0].tracks
    );

    return (
      <div className="album-component">
        <div className="album-top-box">
          <div
            className="album-image-block"
            style={{
              backgroundImage: `url(${url})`,
            }}
          ></div>
          <div className="album-description">
            <div className="top-album-description">
              <div className="album-name">{albumObject.title}</div>

              <div className="artist">
                <Link
                  to={`/artist/${artistName}`}
                  className="link"
                  key={artistName}
                >
                  {artistName}
                </Link>
              </div>
            </div>
            <Actions />
            <div className="album-actions"></div>
          </div>
        </div>
        <div className="album-track-container">
          {tracksArrayWithTime.map((item: any) => (
            <div className="album-track-box">
              <div className="album-track" key={item.id}>
                <div className="number">{item.number}</div>
                <div>
                  {" "}
                  <span>
                    {" "}
                    <Link
                      to={`/artist/${artistName}`}
                      className="link"
                      key={artistName}
                    >
                      {artistName}
                    </Link>{" "}
                  </span>{" "}
                  -{" "}
                  <Link to={`/${item.recording.id}`} className="link">
                    {item.title}
                  </Link>
                </div>
              </div>
              <div className="time">{parseDurationToString(item)}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Album;

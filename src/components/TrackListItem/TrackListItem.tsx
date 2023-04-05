import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./trackListItem.css";
import { GrPlayFill } from "react-icons/gr";
import parseDurationToString from "../utils/parseDurationToString";
import Loader from "../../loader/loader";
function TrackListItem(props: any) {
  const [url, setUrl] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<any>(true);
  React.useEffect((): any => {
    fetch(
      `https://coverartarchive.org/release/${props.track.releases[0].id}/front`
    )
      .then((response) => {
        if (response.status === 404) {
          console.log("SUCCESS", response.status);
          setUrl(`./musicplaceholder.jpg`);
        } else {
          setUrl(response.url);
        }
        return response;
      })
      .then((loading) => {
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [props.track.releases[0].id]);

  if (isLoading === true) {
    return <Loader />;
  } else {
    return (
      <div className="track-list-item">
        <div className="left-part-of-item">
          <div
            className="music-icon"
            style={{
              backgroundImage: `url(${url})`,
            }}
          >
            <button className="music-button">
              <GrPlayFill />
            </button>
          </div>
          <div>
            <div>
              <div className="track-album-block">
                <Link to={`/${props.track.id}`} className="link">
                  {props.track.title}
                </Link>
                <span> - </span>
                <Link
                  to={`/album/${props.track.releases[0].id}`}
                  className="link"
                >
                  {" "}
                  {props.track.releases[0].title}
                </Link>
              </div>
              <div className="artist">
                {props.track["artist-credit"].map((artist: any) => (
                  <Link
                    to={`/artist/${artist.name}`}
                    className="link"
                    key={artist.name}
                  >
                    {artist.name}{" "}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="time">{parseDurationToString(props.track)}</div>
      </div>
    );
  }
}
export default TrackListItem;

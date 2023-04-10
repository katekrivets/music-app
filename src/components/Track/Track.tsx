import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./track.css";
import Actions from "../Actions/Actions";
import parseDurationToString from "../utils/parseDurationToString";
import { GrPlayFill } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { getTracktById } from "../../api";
import populateSongsWithTime from "../utils/populateSongsWithTime";
import Loader from "../../loader/loader";
import { Link } from "react-router-dom";

type MyParams = {
  trackId: string;
};

function Track(): any {
  const [trackItemArray, setTrackItemArray] = useState<any>();
  const { trackId } = useParams<keyof MyParams>() as MyParams;
  const [url, setUrl] = useState<any>(null);

  React.useEffect(() => {
    getTracktById(trackId)
      .then((result) => {
        console.log(result);
        setTrackItemArray(populateSongsWithTime(result.recordings));
        return populateSongsWithTime(result.recordings);
      })
      .then((r) => console.log(r));
  }, [trackId]);
  //другой вариант добавления loader
  if (trackItemArray === null || trackItemArray === undefined) {
    return <Loader />;
  } else {
    fetch(
      `https://coverartarchive.org/release/${trackItemArray[0].releases[0].id}/front`
    )
      .then((response) => {
        if (response.status === 404) {
          console.log("SUCCESS", response.status);
          setUrl(`../musicplaceholder.jpg`);
        } else {
          setUrl(response.url);
        }
      })
      .catch((err) => console.log(err));

    return (
      <div className="track-component">
        <div className="exact-track-block">
          <div
            className="image-block"
            style={{
              backgroundImage: `url(${url})`,
            }}
          ></div>
          <div className="description-of-track">
            <div className="top-description">
              <div className="track-name-box">
                <div className="track-name">{trackItemArray[0].title}</div>
                {trackItemArray[0]["artist-credit"].map((artist: any) => {
                  <div>{artist.name}</div>;
                })}
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
                  {" "}
                  <Link
                    to={`/artist/${trackItemArray[0]["artist-credit"][0].name}`}
                    className="link"
                    key={trackItemArray[0]["artist-credit"][0].name}
                  >
                    {trackItemArray[0]["artist-credit"][0].name} -{" "}
                  </Link>
                  {trackItemArray[0].title}
                </div>
              </div>
              <div className="time">
                {parseDurationToString(trackItemArray[0])}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Track;

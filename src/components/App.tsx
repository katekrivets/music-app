import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import TrackList from "./TrackListItem"; // где TrackList? у тебя потеряна прослойка
import SearchBlock from "./SearchBlock";
import Album from "./Album";
import Track from "./Track";
import Artist from "./Artist";
import populateSongsWithTime from "./utils/populateSongsWithTime.js";
import songs from "./utils/songs.json";

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      itemsArray: populateSongsWithTime(songs.tracks.items),
    };
  }
  render() {
    return (
      this.state.itemsArray ?
        <div className="container">
          <Routes>
            <Route path="/" element={<SearchBlock />}>
              <Route
                index
                element={<TrackList itemsArray={this.state.itemsArray} />}
              />
              <Route
                path="/:trackId"
                element={<Track itemsArray={this.state.itemsArray} />}
              />
              <Route
                path="/album/:albumId"
                element={<Album itemsArray={this.state.itemsArray} />}
              />
              <Route
                path="/artist/:artistId"
                element={<Artist itemsArray={this.state.itemsArray} />}
              />
            </Route>
          </Routes>
        </div> : <></>
    );
  }
}
export default App;

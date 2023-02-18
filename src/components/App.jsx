import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import TrackList from "./TrackList.jsx";
import SearchBlock from "./SearchBlock";
import Album from "./Album";
import Track from "./Track";
import Artist from "./Artist";
import populateSongsWithTime from "C:/Users/Владислав/Desktop/Dasha/task2/src/components/utils/populateSongsWithTime.js";
import songs from "C:/Users/Владислав/Desktop/Dasha/task2/src/components/utils/songs";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsArray: populateSongsWithTime(songs.tracks.items),
    };
  }
  render() {
    return (
      <div className="container">
        <Routes>
          <Route path="/" element={<SearchBlock />}>
            <Route
              index
              element={<TrackList itemsArray={this.state.itemsArray} />}
            />
            <Route
              path="/:userId"
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
      </div>
    );
  }
}

export default App;

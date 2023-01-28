import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import TrackList from "./TrackList.jsx";
import SearchBlock from "./SearchBlock";
import Album from "./Album";
import Track from "./Track";
import Artist from "./Artist";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Routes>
          <Route path="/" element={<SearchBlock />}>
            <Route index element={<TrackList />} />
            <Route path="/:userId" element={<Track />} />
            <Route path="/album/:albumId" element={<Album />} />
            <Route path="/artist/:artistId" element={<Artist />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;

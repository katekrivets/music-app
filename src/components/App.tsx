import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import TrackList from "./TrackList";
import SearchBlock from "./SearchBlock";
import Album from "./Album";
import Track from "./Track";
import Artist from "./Artist";
import populateSongsWithTime from "./utils/populateSongsWithTime";
import { TrackForSearch } from "../types/Track";

interface ComponentState {
  itemsArray: Array<TrackForSearch & { duration: string }>;
  value: string;
}
interface ComponentProps {}

class App extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      itemsArray: [],
      value: "",
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.itemsArrayChange = this.itemsArrayChange.bind(this);
  }
  //обновляет value в state
  handlerChange(event: string) {
    this.setState({
      value: event,
    });
  }

  //обновляет itemsArray в state
  itemsArrayChange(result: any) {
    this.setState({
      itemsArray: populateSongsWithTime(result),
    });
  }

  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<any>,
    snapshot?: any
  ): void {
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <SearchBlock
                value={this.state.value}
                handlerChange={this.handlerChange}
                itemsArrayChange={this.itemsArrayChange}
              />
            }
          >
            <Route
              path="/"
              index
              element={<TrackList itemsArray={this.state.itemsArray} />}
            />
            <Route path="/:trackId" element={<Track />} />
            <Route
              path="/artist/:artistId"
              element={<Artist itemsArrayChange={this.itemsArrayChange} />}
            />
            <Route
              path="/album/:albumId"
              element={<Album itemsArray={this.state.itemsArray} />}
            />
          </Route>
        </Routes>
      </div>
    );
  }
}
export default App;

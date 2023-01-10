import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TrackList from './TrackList';
import Artist from './Artist';
import Album from './Album';
import Track from './Track';

class App extends Component {
  render() {
    return (
      <>
        <header className="menu">
          <Link to='/'>TRACKS</Link>
          <Link to='/artist/{id}'>ARTIST</Link>
          <Link to='/album/{id}'>ALBUM</Link>
          <Link to='/track /{id}'>TRACK</Link>
        </header>
        <Routes>
          <Route path='/' element={<TrackList />} />
          <Route path='/artist/{id}' element={<Artist />} />
          <Route path='/album/{id}' element={<Album />} />
          <Route path='/track /{id}' element={<Track />} />
        </Routes>
      </>
    )
  }
}

export default App
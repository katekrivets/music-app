import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import songs from './songs';
import './trackList.css';
const itemsArray = Object.keys(songs.tracks.items);

class TrackList extends Component {
  render() {
    return (
      <div className='track-block'>
        {itemsArray.map(item => (
          <ul type='none' className='trackList-item'>
            <div className='music-icon'>
            </div>
            <li key={songs.tracks.items[item].id}>
              <div className='track-album-block'>
                <Link to={songs.tracks.items[item].id} className='link'>{songs.tracks.items[item].name}</Link>
                <Link to={`/album/${songs.tracks.items[item].album.id}`} className='link'> - album {songs.tracks.items[item].album.name}</Link>
              </div>
              <div className='artist'>
                {songs.tracks.items[item].album.artists.map(artist => (
                  <Link to={`/artist/${artist.id}`} className='link' >{artist.name} </Link>
                ))}
              </div>
            </li>
          </ul>
        ))}
      </div>
    )
  }
}
export default TrackList

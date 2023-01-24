import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import songs from './songs';
import './trackList.css';

import durationArray from './utils/time.js';
const itemsArray = Object.keys(songs.tracks.items);
class TrackList extends Component {
  render() {
    return (
      <div className='track-block'>
        {itemsArray.map(item => (
          <ul type='none' className='trackList-item'>
            <div className='left-part-of-item'>
              <div className='music-icon' style={{ backgroundImage: `url(${songs.tracks.items[item].album.images[2].url})` }}>
                <button className='music-button'>
                </button>
              </div>
              <div key={songs.tracks.items[item].id}>
                <div>
                  <div className='track-album-block'>
                    <Link to={songs.tracks.items[item].id} className='link'>{songs.tracks.items[item].name}</Link>
                    <span>- album </span>
                    <Link to={`/album/${songs.tracks.items[item].album.id}`} className='link'> {songs.tracks.items[item].album.name}</Link>
                  </div>
                  <div className='artist'>
                    {songs.tracks.items[item].album.artists.map(artist => (
                      <Link to={`/artist/${artist.id}`} className='link' >{artist.name} </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='time'>
              {durationArray.map(duration => (
                duration[item].hours === 0 ?
                  duration[item].minutes + ':' + duration[item].seconds : duration[item].hours + ':' + duration[item].minutes + ':' + duration[item].seconds
              ))}
            </div>

          </ul>
        ))}
      </div>
    )
  }
}
export default TrackList

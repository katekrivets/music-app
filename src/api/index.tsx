import { Artist } from "../types/Artist";
import { Album } from "../types/Album";
import { Track } from "../types/Track";
const baseInfo = {
  root: "https://ws.audioscrobbler.com/2.0/",
  api_key: "d10c4c81eece480e2b0a973fa614a2aa",
};
export const getArtistByName = (artist_name: string): Promise<Artist> => {
  return fetch(
    `${baseInfo.root}?method=artist.getinfo&api_key=${baseInfo.api_key}&artist=${artist_name}`
  ).then((response) => response.json());
};
export const getArtistById = (artist_id: string): Promise<Artist> => {
  return fetch(
    `${baseInfo.root}?method=artist.getinfo&api_key=${baseInfo.api_key}&mbid=${artist_id}`
  ).then((response) => response.json());
};
export const searchArtist = (artist_name: string): Promise<Artist> => {
  return fetch(
    `${baseInfo.root}?method=artit.search&api_key=${baseInfo.api_key}&artist=${artist_name}`
  ).then((response) => response.json());
};

export const getAlbumByName = (
  artist_name: string,
  album_name: string
): Promise<Album> => {
  return fetch(
    `${baseInfo.root}?method=album.getinfo&api_key=${baseInfo.api_key}&artist=${artist_name}&album=${album_name}`
  ).then((response) => response.json());
};
export const getAlbumtById = (
  artist_name: string,
  album_id: string
): Promise<Album> => {
  return fetch(
    `${baseInfo.root}?method=album.getinfo&api_key=${baseInfo.api_key}&artist=${artist_name}&mbid=${album_id}`
  ).then((response) => response.json());
};
export const searchAlbum = (album_name: string): Promise<Album> => {
  return fetch(
    `${baseInfo.root}?method=album.search&api_key=${baseInfo.api_key}&album=${album_name}`
  ).then((response) => response.json());
};

export const getTrackByName = (
  artist_name: string,
  track_name: string
): Promise<Track> => {
  return fetch(
    `${baseInfo.root}?method=track.getinfo&api_key=${baseInfo.api_key}&artist=${artist_name}&track=${track_name}`
  ).then((response) => response.json());
};
export const getTracktById = (
  artist_name: string,
  track_id: string
): Promise<Track> => {
  return fetch(
    `${baseInfo.root}?method=track.getinfo&api_key=${baseInfo.api_key}&artist=${artist_name}&mbid=${track_id}`
  ).then((response) => response.json());
};
export const searchTrack = (track_name: string): Promise<Track> => {
  return fetch(
    `${baseInfo.root}?method=track.search&api_key=${baseInfo.api_key}&track=${track_name}`
  ).then((response) => response.json());
};

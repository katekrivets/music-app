import { Artists } from "../types/Artist";
import { Album } from "../types/Album";
import { SearchTrack } from "../types/Track";

export const searchTrack = (track_name: string): Promise<SearchTrack> => {
  return fetch(
    `https://musicbrainz.org/ws/2/recording/?query=name:${track_name}&fmt=json`
  ).then((response) => response.json());
};
export const getTracktById = (track_id: string): Promise<SearchTrack> => {
  return fetch(
    `https://musicbrainz.org/ws/2/recording/?query=rid:${track_id}&fmt=json`
  ).then((response) => response.json());
};
export const getTrackByArtistId = (artist_id: string): Promise<SearchTrack> => {
  return fetch(
    `http://musicbrainz.org/ws/2/recording/?query=arid:${artist_id}&fmt=json`
  ).then((response) => response.json());
};
export const getArtistById = (artist_id: string): Promise<Artists> => {
  return fetch(
    `https://musicbrainz.org/ws/2/artist/?query=arid:${artist_id}&fmt=json`
  ).then((response) => response.json());
};
export const getAlbumById = (album_id: string): Promise<Album> => {
  return fetch(
    `https://musicbrainz.org/ws/2/release/${album_id}?fmt=json&inc=recordings`
  ).then((response) => response.json());
};

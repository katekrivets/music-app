import { Base } from "./BaseInfo";
import { Image } from "./BaseInfo";
import { Wiki } from "./BaseInfo";
export interface Track {
  name: string;
  mbid: string;
  url: string;
  duration: string;
  artist: TrackOfArtist;
  album: TrackinAlbum;
  wiki: Wiki;
}
interface TrackinAlbum {
  artist: string;
  mbid: string;
  url: string;
  image: Array<Image>;
  title: string;
}
export interface TrackInfo {
  duration: number;
  url: string;
  name: string;
  artist: TrackOfArtist;
}
interface TrackOfArtist extends Base {
  mbid: string;
}
export interface SearchTrack extends SearchTrackInfo<TrackForSearch> {}

interface SearchTrackInfo<T> {
  trackmatches: { track: Array<T> };
}
interface TrackForSearch extends Base {
  artist: string;
  mbid: string;
  image: Array<Image>;
  listeners: string;
}

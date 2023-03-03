import { Base } from "./BaseInfo";
import { Image } from "./BaseInfo";
import { Wiki } from "./BaseInfo";
import { TrackInfo } from "./Track";
export interface Album {
  album: AlbumInfo;
}
interface AlbumInfo extends Base {
  artist: string;
  mbid: string;
  image: Array<Image>;
  tracks: { track: Array<TrackInfo> };
  wiki: Wiki;
}
export interface SearchAlbum extends SearchAlbumInfo<AlbumForSearch> {}

interface SearchAlbumInfo<T> {
  albummatches: { album: Array<T> };
}
interface AlbumForSearch extends Base {
  artist: string;
  mbid: string;
  image: Array<Image>;
}

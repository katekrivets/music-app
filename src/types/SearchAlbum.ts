import { BaseInfoWithImage } from "./BaseInfo";
export interface SearchAlbum {
  results: SearchAlbumInfo;
}
interface SearchAlbumInfo {
  albummatches: { album: Array<ArtistFullInfo> };
}
interface ArtistFullInfo extends BaseInfoWithImage {
  artist: string;
  mbid: string;
}

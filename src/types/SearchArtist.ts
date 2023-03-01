import { BaseInfoWithImage } from "./BaseInfo";
export interface SearchArtist {
  results: SearchArtistInfo;
}
interface SearchArtistInfo {
  artistmatches: { artist: Array<ArtistFullInfo> };
}
interface ArtistFullInfo extends BaseInfoWithImage {
  listeners: string;
  mbid: string;
}

import { BaseInfoWithId } from "./BaseInfo";
import { Image } from "./BaseInfo";
import { Wiki } from "./BaseInfo";
export interface Album {
  album: AlbumInfo;
}
interface AlbumInfo extends BaseInfoWithId {
  artist: string;
  image: Array<Image>;
  tracks: { track: Array<TrackInfo> };
  wiki: Wiki;
}
interface TrackInfo {
  duration: number;
  url: string;
  name: string;
  artist: BaseInfoWithId;
}

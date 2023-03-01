import { BaseInfoWithId } from "./BaseInfo";
import { BaseTrackInfo } from "./BaseInfo";
import { Wiki } from "./BaseInfo";
export interface Track {
  name: string;
  mbid: string;
  url: string;
  duration: string;
  artist: BaseInfoWithId;
  album: TrackinAlbum;
  wiki: Wiki;
}
interface TrackinAlbum extends BaseTrackInfo {
  title: string;
}

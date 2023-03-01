import { BaseInfoWithImage } from "./BaseInfo";
import { Wiki } from "./BaseInfo";
export interface Artist {
  artist: ArtistInfo;
  similar: {
    artist: Array<BaseInfoWithImage>;
  };
  stats: Stats;
  bio: Bio;
}
interface ArtistInfo extends BaseInfoWithImage {
  mbid: string;
}
interface Stats {
  listeners: string;
  playcount: string;
}
interface Link {
  "#text": string;
  rel: string;
  href: string;
}
interface Bio extends Wiki {
  links: { link: Link };
}

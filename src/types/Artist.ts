import { Base } from "./BaseInfo";
import { Stats } from "./BaseInfo";
import { Image } from "./BaseInfo";
import { Bio } from "./BaseInfo";
export interface Artist {
  artist: ArtistInfo;
  similar: {
    artist: Array<ArtistItem>;
  };
  stats: Stats;
  bio: Bio;
}
interface ArtistInfo extends Base {
  mbid: string;
  image: Array<Image>;
}
interface ArtistItem extends Base {
  image: Array<Image>;
}
export interface SearchArtist extends SearchArtistInfo<ArtistForSearch> {}

interface SearchArtistInfo<T> {
  artistmatches: { artist: Array<T> };
}
interface ArtistForSearch extends ArtistInfo {
  listeners: string;
}

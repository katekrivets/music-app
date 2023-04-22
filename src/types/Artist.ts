export interface Artists {
  artists: Array<ArtistItem>;
}
interface ArtistItem {
  id: string;
  name: string;
  "sort-name": string;
  country: string;
  "life-span": {
    begin: string;
    end: string;
    ended: boolean;
  };
}

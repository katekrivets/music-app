export interface BaseInfoWithId {
  mbid: string;
  url: string;
  name: string;
}
export interface BaseInfoWithImage {
  url: string;
  name: string;
  image: Array<Image>;
}
export interface BaseTrackInfo {
  artist: string;
  mbid: string;
  url: string;
  image: Array<Image>;
}
export interface Image {
  "#text": string;
  size: "string";
}
export interface Wiki {
  published: string;
  summary: string;
  content: string;
}

export interface Base {
  url: string;
  name: string;
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
export interface Stats {
  listeners: string;
  playcount: string;
}
interface Link {
  "#text": string;
  rel: string;
  href: string;
}
export interface Bio extends Wiki {
  links: { link: Link };
}

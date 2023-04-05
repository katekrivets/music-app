export interface Album {
  title: string;
  id: string;
  media: Array<AlbumMedia>;
}
interface AlbumMedia {
  tracks: Array<AlbumTracks>;
}
export interface AlbumTracks {
  position: number;
  title: string;
  id: string;
  length: number | null;
}

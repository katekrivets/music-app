export interface SearchTrack {
  recordings: Array<TrackForSearch>;
}
export interface TrackForSearch {
  id: string;
  title: string;
  length: number;
  video: null;
  "artist-credit": Array<ArtistInfoOfTrack>;
  releases: Array<TrackReleases>;
  isrcs: Array<string>;
}
export interface TrackReleases {
  id: string;
  title: string;
  "status-id": string;
  "release-group": {
    id: string;
    "primary-type": string;
  };
  date: string;
  country: string;
  "track-count": number;
}
export interface ArtistInfoOfTrack {
  artist: {
    id: string;
    name: string;
    "sort-name": string;
  };
}

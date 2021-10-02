export type Movie = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  imdb_id: string;
  original_title: string;
  overview: string;
  homepage: string;
  title: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  genres: [{
    id: number;
    name: string;
  }];
}
import { Movie } from "./types/movie";

export const getListMovies = (size: number, movies: Movie[]) => {
  let popularMovies: Movie[] = [];

  for(let i=0, l=size; i<l; i++) {
    popularMovies.push(movies[i]);
  }

  return popularMovies;
}
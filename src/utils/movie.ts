import { Movie } from "./types/movie";

export const getListMovies = (size: number, movies: Movie[]): Movie[] => {
  let popularMovies: Movie[] = [];

  for(let i=0, l=size; i<l; i++) {
    popularMovies.push(movies[i]);
  }

  return popularMovies;
}


export const getRandomMovie = (movies: Movie[]): Movie => {
  return movies[Math.floor(Math.random() * movies.length)];
}
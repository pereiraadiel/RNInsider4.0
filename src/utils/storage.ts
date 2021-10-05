import AsyncStorage from "@react-native-async-storage/async-storage";
import { Movie } from "./types/movie";

export const getMovies = async (key: string) => {
  const myMovies = await AsyncStorage.getItem(key);
  if(!myMovies) return [];
  let moviesSave = JSON.parse(myMovies) as Movie[];
  return moviesSave;
}

export const saveMovie = async (key: string, newMovie: Movie) => {
  let moviesStored = await getMovies(key);
  // verifica se o array contem o filme já esta salvo
  const hasMovie = moviesStored.some(item => item.id === newMovie.id);
  if(hasMovie) return;
  moviesStored.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
}

export const deleteMovie = async (key: string, movie: Movie) => {
  let moviesStored = await getMovies(key);
  moviesStored = moviesStored.filter(item => item.id !== movie.id);
  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
  return moviesStored;
}

export const hasMovie = async (key: string, movie: Movie) => {
  let moviesStored = await getMovies(key);
  const movieAlreadyExist = moviesStored.find(item => item.id === movie.id);
  if(movieAlreadyExist) return true;
  return false;
}
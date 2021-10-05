import { useNavigation, useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Movie } from '../../utils/types/movie';
import { Container, ListMovies } from './styles';
import { deleteMovie as delMovie , getMovies } from '../../utils/storage';
import FavoriteItem from '../../components/FavoriteItem';

const Movies = () => {
  const navigation = useNavigation();
  const focused = useIsFocused();
  const [ movies, setMovies ] = useState<Movie[]>([]);
  const navigateDetailsPage = (movie: Movie | undefined) => {
    if (!movie) return;
    navigation.navigate("Detail" as never, { id: movie.id } as never);
  }
  const deleteMovie = async (movie: Movie | undefined) => {
    if (!movie) return;
    setMovies(await delMovie("@insider-filmes", movie));
  }
  useEffect(() => {
    let isActive = true;
    const getStoredMovies = async () => {
      return await getMovies("@insider-filmes");
    }
    if (isActive) {
      getStoredMovies().then(storedMovies => {
        setMovies(storedMovies);
      });
    }

    // abortar caso o componente nao esteja ativo (na tela)
    return () => {
      isActive = false;
    }
  }, [focused]);

  return (
    <Container>
      <Header title="Insider Filmes" />
      <ListMovies
        data={movies}
        showsVerticalScrollIndicator={false}
        renderItem={
          ({ item }: any) =>
            <FavoriteItem
              data={item}
              navigatePage={() => navigateDetailsPage(item)}
              deleteMovie={() => deleteMovie(item)}
            />
        }
      />
    </Container>
  );
}

export default Movies;
import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { Movie } from '../../utils/types/movie';
import { Container, Title, MovieList } from './styles';
import api, { key as API_KEY } from '../../services/api';
import SearchItem from '../../components/SearchItem';

const Search = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const [movies, setMovies] = useState<Movie[] | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const routeParams = routes.params as { [key: string]: string | number };

  useEffect(() => {
    let isActive = true;
    const getSearchMovie = async () => {
      const response = await api.get("/search/movie", {
        params: {
          query: routeParams.search,
          api_key: API_KEY,
          language: 'pt-BR',
          page: 1
        }
      });
      if(isActive) {
        setMovies(response.data.results);
        setLoading(false);
      }
    }
    if(isActive) getSearchMovie();

    return () => {
      isActive = false;
    }
  }, []);

  const navigateDetailsPage = (movie: Movie | undefined) => {
    if (!movie) return;
    navigation.navigate("Detail" as never, { id: movie.id } as never);
  }

  if(loading) {
    return (
      <Container>
         <ActivityIndicator size="large" color="#FFF" style={{ marginTop: 120 }} />
      </Container>
    )
  }

  return (
    <Container>
      <MovieList
        data={movies}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        renderItem={
          ({ item }: any) => 
          <SearchItem data={item} navigatePage={ () => navigateDetailsPage(item) }/>}
      />
    </Container>
  );
}

export default Search;
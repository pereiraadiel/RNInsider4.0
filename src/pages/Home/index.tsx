import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
  BannerButton,
  Banner,
  Title,
  SliderMovie
} from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';
import api, { key as API_KEY } from '../../services/api';
import { Movie } from '../../utils/types/movie';
import { getListMovies, getRandomMovie } from '../../utils/movie';

const Home = () => {
  const [nowMovies, setNowMovies] = useState<Movie[]>();
  const [popularMovies, setPopularMovies] = useState<Movie[]>();
  const [topMovies, setTopMovies] = useState<Movie[]>();
  const [bannerMovie, setBannerMovie] = useState<Movie | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [input, setInput] = useState<string>('');
  const navigation = useNavigation();

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();
    const getMovies = async () => {
      const [nowData, popularData, topRatedData] = await Promise.all([
        api.get("/movie/now_playing", {
          params: {
            api_key: API_KEY,
            language: 'pt-BR',
            page: 1,
          }
        }),
        api.get("/movie/popular", {
          params: {
            api_key: API_KEY,
            language: 'pt-BR',
            page: 1,
          }
        }),
        api.get("/movie/top_rated", {
          params: {
            api_key: API_KEY,
            language: 'pt-BR',
            page: 1,
          }
        }),
      ]);

      if (isActive) {
        const nowList = getListMovies(10, nowData.data.results);
        const popularList = getListMovies(5, popularData.data.results);
        const topRatedList = getListMovies(5, topRatedData.data.results);

        setBannerMovie(getRandomMovie(nowData.data.results));
        setNowMovies(nowList);
        setPopularMovies(popularList);
        setTopMovies(topRatedList);
        setLoading(false);
      }
    }
    getMovies();

    // abortar caso o componente nao esteja ativo (na tela)
    return () => {
      isActive = false;
      ac.abort();
    }
  }, []);

  const navigateDetailsPage = (movie: Movie | undefined) => {
    if (!movie) return;
    navigation.navigate("Detail" as never, { id: movie.id } as never);
  }

  const handleSearchMovie = () => {
    if(input === '') return;
    navigation.navigate("Search" as never, {search: input} as never);
    setInput('');
  }

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#FFF" style={{ marginTop: 120 }} />
      </Container>
    )
  }

  return (
    <Container>
      <Header title="Insider Filmes" />
      <SearchContainer>
        <Input
          placeholder="Ex Vingadores"
          placeholderTextColor="#DDD"
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <SearchButton
          onPress={handleSearchMovie}
        >
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em Cartaz</Title>
        <BannerButton activeOpacity={0.9} onPress={() => navigateDetailsPage(bannerMovie)}>
          <Banner
            resizeMethod="resize"
            source={{ uri: `https://image.tmdb.org/t/p/original/${bannerMovie?.poster_path}` }}
          />
        </BannerButton>

        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={nowMovies}
          renderItem={
            ({ item }: any) =>
              <SliderItem
                data={item}
                navigatePage={() => navigateDetailsPage(item)}
              />
          }
          keyExtractor={(item: any) => String(item.id)}
        />

        <Title>Populares</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularMovies}
          renderItem={
            ({ item }: any) =>
              <SliderItem
                data={item}
                navigatePage={() => navigateDetailsPage(item)}
              />
          }
          keyExtractor={(item: any) => String(item.id)}
        />

        <Title>Mais votados</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={topMovies}
          renderItem={
            ({ item }: any) =>
              <SliderItem
                data={item}
                navigatePage={() => navigateDetailsPage(item)}
              />
          }
          keyExtractor={(item: any) => String(item.id)}
        />

      </ScrollView>
    </Container>
  );
}

export default Home;
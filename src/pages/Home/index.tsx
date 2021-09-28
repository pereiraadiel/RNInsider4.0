import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
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
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';
import { Feather } from '@expo/vector-icons';
import api, { key as API_KEY } from '../../services/api';
import { Movie } from '../../utils/types/movie';
import { getListMovies } from '../../utils/movie';

const Home = () => {
  const [nowMovies, setNowMovies] = useState<Movie[]>();
  const [popularMovies, setPopularMovies] = useState<Movie[]>();
  const [topMovies, setTopMovies] = useState<Movie[]>();

  useEffect(() => {
    const isActive = true;
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
      const nowList = getListMovies(10, nowData.data.results);
      const popularList = getListMovies(5, popularData.data.results);
      const topRatedList = getListMovies(5, topRatedData.data.results);

      setNowMovies(nowList);
      setPopularMovies(popularList);
      setTopMovies(topRatedList);
    }
    getMovies();
  }, []);

  return (
    <Container>
      <Header title="Insider Filmes" />
      <SearchContainer>
        <Input
          placeholder="Ex Vingadores"
          placeholderTextColor="#DDD"
        />
        <SearchButton>
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em Cartaz</Title>
        <BannerButton activeOpacity={0.9} onPress={() => { alert("Cartaz") }}>
          <Banner
            resizeMethod="resize"
            source={{ uri: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" }}
          />
        </BannerButton>

        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={nowMovies}
          renderItem={({ item }: any) => <SliderItem data={item}/>}
          keyExtractor={(item: any) => String(item.id)}
        />

        <Title>Populares</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularMovies}
          renderItem={({ item }: any) => <SliderItem data={item}/>}
          keyExtractor={(item: any) => String(item.id)}
        />

        <Title>Mais votados</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={topMovies}
          renderItem={({ item }: any) => <SliderItem data={item} />}
          keyExtractor={(item: any) => String(item.id)}
        />

      </ScrollView>
    </Container>
  );
}

export default Home;
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { GestureResponderEvent } from 'react-native';
import NoCover from '../../assets/nocover.png';
import { Movie } from '../../utils/types/movie';
import { Container, Title, Banner, RateContainer, Rate } from './styles';

type SearchItemProps = {
  data: Movie;
  navigatePage: (event?: GestureResponderEvent) => void;
}

const SearchItem = ( { data, navigatePage }: SearchItemProps) => {
  const detailMovie = () => {
    if(data.release_date === '') return;
    navigatePage();
  }
  return (
    <Container activeOpacity={0.7} onPress={detailMovie}>
      { data?.poster_path ? (
        <Banner
          source={{ uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`}}
          resizeMethod='resize'
        />
      ) : (
        <Banner
          source={NoCover}
          resizeMethod='resize'
        />
      )}
      <Title>{data.title}</Title>
      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E"/>
        <Rate>{data.vote_average}/10</Rate>
      </RateContainer>
    </Container>
  );
}

export default SearchItem;
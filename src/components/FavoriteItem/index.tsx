import React from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import { GestureResponderEvent } from 'react-native';
import { Movie } from '../../utils/types/movie';
import {
  Container,
  Title,
  RateContainer,
  Rate,
  ActionContainer,
  DetailButton,
  DeleteButton,
} from './styles';

type FavoriteItemProps = {
  data: Movie;
  navigatePage: (event?: GestureResponderEvent) => void;
  deleteMovie: (event?: GestureResponderEvent) => void;
}

const FavoriteItem = ({ data, navigatePage, deleteMovie }: FavoriteItemProps) => {
  return (
    <Container>
      <Title size={22}>{data.title}</Title>
      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Rate>{data.vote_average}/10</Rate>
      </RateContainer>

      <ActionContainer>
        <DetailButton onPress={navigatePage}>
          <Title size={14}>Ver detalhes</Title>
        </DetailButton>
        <DeleteButton onPress={deleteMovie}>
          <Feather name="trash" size={24} color="#FFF" />
        </DeleteButton>
      </ActionContainer>
    </Container>
  );
}

export default FavoriteItem;
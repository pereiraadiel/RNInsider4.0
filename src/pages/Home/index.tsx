import React from 'react';
import { View, Text } from 'react-native';
import { Container, SearchContainer, Input, SearchButton } from './styles';
import Header from '../../components/Header';
import { Feather } from '@expo/vector-icons';

const Home = () => {
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
      <Text>Home Page</Text>
    </Container>
  );
}

export default Home;
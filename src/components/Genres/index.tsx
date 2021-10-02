import React from 'react';
import { Container, Title } from './styles';

type GenresProps = {
  title: string
}

const Genres = ({ title }: GenresProps) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default Genres;
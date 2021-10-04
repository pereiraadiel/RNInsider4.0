import React, { useEffect, useState } from 'react';
import { Title, BackButton, Container } from './styles';
import { Feather } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import api from '../../services/api';
import { ActivityIndicator } from 'react-native';

type ModalLinkProps = {
  link?: string;
  title?: string;
  movieId?: number;
  closeModal: Function;
}

const ModalLink = ({ link, title, movieId, closeModal }: ModalLinkProps) => {
  const tmdbLink = `https://www.themoviedb.org/movie/${movieId}`;
  let hasError = false;
  const [movieLink, setMovieLink] = useState<string>('');

  useEffect(() => {
    const getLink = async () => {
      if (link) {
        hasError = await api.get(link).then(result => false).catch(err => {
          console.error(err);
          return true;
        });
        return hasError ? tmdbLink : link.startsWith('https://') ? link : tmdbLink;
      } else {
        return tmdbLink;
      }
    }
    getLink().then(res => {
      setMovieLink(res);
    });
  }, []);

  return (
    <>
      <BackButton activeOpacity={0.9} onPress={() => closeModal()}>
        <Feather
          name="x"
          size={35}
          color="#FFF"
        />
        <Title numberOfLines={1}>{title}</Title>
      </BackButton>
      {movieLink !== '' ? (
        <WebView
          source={{ uri: movieLink }}
        />
      ) : (
        <Container>
          <ActivityIndicator size="large" color="#FFF" style={{ marginTop: 120 }} />
        </Container>
      )}
    </>
  );
}

export default ModalLink;
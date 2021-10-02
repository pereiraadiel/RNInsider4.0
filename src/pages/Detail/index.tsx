import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import Stars from 'react-native-stars';
import { Feather, Ionicons } from '@expo/vector-icons';
import { ScrollView, Modal } from 'react-native';
import {
  Container,
  Banner,
  Header,
  HeaderButton,
  ButtonLink,
  Title,
  ContentArea,
  Rate,
  ListGenres,
  Description
} from './styles';
import { Movie } from '../../utils/types/movie';
import api, { key as API_KEY } from '../../services/api';
import { AxiosResponse } from 'axios';
import Genres from '../../components/Genres';
import ModalLink from '../../components/ModalLink';

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as { [key: string]: string };

  const [movie, setMovie] = useState<Movie | undefined>();
  const [openLink, setOpenLink] = useState<boolean>(false);

  useEffect(() => {
    let isActive = true;
    const getMovie = async () => {
      const response = await api.get(`/movie/${routeParams?.id}`, {
        params: {
          api_key: API_KEY,
          language: 'pt-BR'
        }
      }).catch(err => {
        console.error(err);
      }) as AxiosResponse<any>;

      if (isActive) {
        setMovie(response.data);
        // console.log(response.data);
      }
    }

    if (isActive) {
      getMovie();
    }

    return () => {
      isActive = false;
    }
  }, []);

  return (
    <Container>
      <Header>
        <HeaderButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <Feather
            name="arrow-left"
            size={28}
            color="#FFF"
          />
        </HeaderButton>
        <HeaderButton>
          <Ionicons
            name="bookmark"
            size={28}
            color="#FFF"
          />
        </HeaderButton>
      </Header>

      <Banner
        source={{ uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}` }}
        resizeMethod="resize"
      />

      <ButtonLink activeOpacity={0.8} onPress={() => setOpenLink(true)}>
        <Feather 
          name="link"
          size={24}
          color="#FFF"
        />
      </ButtonLink>

      <Title numberOfLines={2}>{movie?.title}</Title>

      <ContentArea>
        <Stars
          default={movie?.vote_average}
          count={10}
          half={true}
          starSize={20}
          fullStar={ 
            <Ionicons 
              name="md-star"
              size={24}
              color="#E7A74E"
            /> 
          }
          emptyStar={ 
            <Ionicons 
              name="md-star-outline"
              size={24}
              color="#E7A74E"
            /> 
          }
          halfStar={ 
            <Ionicons 
              name="md-star-half"
              size={24}
              color="#E7A74E"
            /> 
          }
          disable={true}
        />
        <Rate>{movie?.vote_average}/10</Rate>
      </ContentArea>

      <ListGenres
        data={movie?.genres}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }: any) => <Genres title={item.name}/>}
      />

      <Title>Descrição</Title>
      <ScrollView showsVerticalScrollIndicator={false}>
          <Description>
            {movie?.overview}
          </Description>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openLink}
      > 
        <ModalLink 
          link={movie?.homepage}
          title={movie?.title}
          closeModal={ () => setOpenLink(false) }
        />
      </Modal>
    </Container>
  );
}

export default Detail;
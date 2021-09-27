import React from 'react';
import { View, Text } from 'react-native';
import { Container, MenuButton, Title } from './styles';
import { Feather } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface NavProp extends NavigationProp<any, never, Readonly<{ key: string; index: number; routeNames: never[]; history?: unknown[] | undefined; routes: any[]; type: string; stale: false; }>>{
  openDrawer: Function
}

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation() as NavProp;
  return (
    <Container>
      <MenuButton onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={36} color="#FFF"/>
      </MenuButton>
      <Title>{title}</Title>
    </Container>
  );
}

export default Header;
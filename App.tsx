import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} translucent backgroundColor='transparent'/>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
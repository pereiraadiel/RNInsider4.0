import React from 'react';
import { Title, BackButton } from './styles';
import { Feather } from '@expo/vector-icons';
import { WebView} from 'react-native-webview';

type ModalLinkProps = {
  link?: string;
  title?: string;
  closeModal: Function;
}

const ModalLink = ({ link, title, closeModal }: ModalLinkProps) => {
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
      <WebView 
        source={{uri: link || 'https://adiel.dev'}}
      />
    </>
  );
}

export default ModalLink;
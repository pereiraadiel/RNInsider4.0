import styled from 'styled-components';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background-color: #191a30;
`;

export const Header = styled(View)`
  z-index: 99;
  position: absolute;
  top: 35px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 14px;
`;

export const HeaderButton = styled(TouchableOpacity)`
  width: 45px;
  height: 45px;
  background-color: rgba(25,26,48, 0.8);
  border-radius: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonLink = styled(TouchableOpacity)`
  width: 63px;
  height: 63px;
  background-color: #E72f49;
  border-radius: 31.5px;
  position: absolute;
  top: 300px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const Banner = styled(Image)`
  width: 100%;
  height: 350px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
`;

export const Title = styled(Text)`
  color: #FFF;
  font-size: 22px;
  font-weight: bold;
  padding: 8px 14px;
  margin-top: 14px;
`;

export const ContentArea = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
`;

export const Rate = styled(Text)`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 14px;
  margin-top: 14px;
`;

export const ListGenres = styled(FlatList)`
  padding-left: 14px;
  margin: 8px 0;
  min-height: 35px;
  max-height: 35px;
`;

export const Description = styled(Text)`
  color: #FFF;
  font-size: 18px;
  font-weight: normal;
  padding: 0 14px 30px 14px;
  margin-top: 14px;
  line-height: 22px;
`;
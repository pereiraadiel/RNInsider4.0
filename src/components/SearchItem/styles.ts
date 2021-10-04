import styled from "styled-components";
import { View, TouchableOpacity, Text, Image } from 'react-native';

export const Container = styled(TouchableOpacity)`
  padding: 14px;
`;

export const Title = styled(Text)`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  padding-top: 8px;
`;

export const Banner = styled(Image)`
  width: 100%;
  height: 180px;
  border-radius: 8px;
`;

export const RateContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-top: 8px; 
`;
export const Rate = styled(Text)`
  color: #FFF;
  margin-left: 4px;
  font-size: 12px;
`;
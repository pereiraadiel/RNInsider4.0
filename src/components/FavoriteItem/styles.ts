import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';

type TitleProps = {
  size: number
}

export const Container = styled(View)`
  padding: 8px 14px;
`;

export const Title = styled(Text)<TitleProps>`
  color: #FFF;
  font-size: ${props => props.size}px;
  font-weight: bold;
`;

export const DetailButton = styled(TouchableOpacity)`
  width: 85%;
  height: 30px;
  background-color: #e72f49;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

`;

export const DeleteButton = styled(TouchableOpacity)`
  width: 15%;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const ActionContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 8px 0; 
`;

export const RateContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 8px 0; 
`;

export const Rate = styled(Text)`
  color: #FFF;
  margin-left: 4px;
  font-size: 12px;
`;

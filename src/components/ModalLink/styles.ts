import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";

export const Title = styled(Text)`
  margin-left: 8px;
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
`;

export const BackButton = styled(TouchableOpacity)`
  background-color: #191a30;
  padding: 10px;
  margin-top: 60px;
  flex-direction: row;
  align-items: center;
`;
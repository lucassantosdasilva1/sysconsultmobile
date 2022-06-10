import styled from "styled-components/native";

import { FontAwesome5, Ionicons, Octicons } from "@expo/vector-icons";

import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from "react-native";

export const EditButton = styled.TouchableOpacity`
`;

export const Container = styled.View`
  height: 125px;
  background-color: #ffff;
  flex-direction: row;

  margin-bottom: 10px;

  align-items: center;
  justify-items: center;

  background-color: transparent;
`;

export const CreatedAt = styled.View`
  height: 17px;
  padding-right: 10px;

  width: 100%;

  background-color: #ffff;

  flex-direction: row;
  justify-content: flex-end;

`;

export const CreatedAtText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.title};

  font-style: italic;
`;

export const WrapPhoto = styled.View`
  width: 24%;
  height: 100%;
  background-color: cadetblue;

  align-items: center;
  justify-content: center;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 100%;
`;

export const WrapInfos = styled.View`
  /* flex: 1; */
  height: 100%;
  width: 70%;

  background-color: #FFF;

  padding: 0px 10px;
`;

export const WrapTitlesType = styled.View`
  /* flex-direction: row; */
  /* justify-content: space-between; */
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};

  flex-wrap: wrap;
`;

export const Estoque = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};

  flex-wrap: wrap;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;



export const WrapDescription = styled.View``;

export const Description = styled.Text``;

export const WrapRatingPrice = styled.View``;

export const WrapRate = styled.View`
  /* flex-direction: row; */
  /* justify-content: center; */
  /* align-items: center; */
`;

export const RateComponent = styled(Octicons)`
  margin-right: 2px;
  color: ${({ theme }) => theme.colors.text};
`;

export const WrapOptionsPrice = styled.View`

  height: 150px;
  width: 20px;

  justify-items: center;
  align-items: center;

  background-color: yellowgreen;
`;

export const WrapOptions = styled.View`
  margin-top: 50px;

  background-color: black;
`;

export const DeleteButton = styled.TouchableOpacity`

`;

export const DeleteIcon = styled(Ionicons)``;


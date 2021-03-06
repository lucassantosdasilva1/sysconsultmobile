import { Button, Dimensions } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesome5, Ionicons, Octicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get('window').width;

export const MainContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const EditProductButton = styled.TouchableOpacity`
  width: 85%;
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

export const WrapPhoto = styled.View`
  width: 25%;
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
  width: 75%;

  background-color: #FFF;

  padding: 5px 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.title};

  height: 40px;

  flex-wrap: wrap;

`;

export const WrapEstoque = styled.View`
    margin-top: ${RFValue(22)}px;
    align-items: flex-end;
`;
export const Estoque = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;
  font-style: italic;


  color: ${({ theme }) => theme.colors.title};

  flex-wrap: wrap;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const WrapDelete = styled.TouchableOpacity`
  height: 125px;
  width: 15%;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.attention};;
`;

export const DeleteIcon = styled(Ionicons).attrs({
  name: "md-trash-sharp",
  size: RFValue(20),
  color: "#FBABA0",
  })
  `
  
  `;


import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};

  background-color: ${({ theme }) => theme.colors.background_primary};

  border-radius: 5px;
  padding: 2px 5px;

  flex-wrap: wrap;
`;
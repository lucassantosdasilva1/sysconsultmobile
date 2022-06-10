import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;

  width: ${windowWidth}px;
  height: ${windowHeight}px;

  align-items: center;

  background-color: ${({theme}) => theme.colors.main};
`;

export const WrapProductCard = styled.View`
  flex: 1;

  width: 100%;
  height: 100%;

  padding: 5px;

  background-color: ${({theme}) => theme.colors.background_secondary};
`;
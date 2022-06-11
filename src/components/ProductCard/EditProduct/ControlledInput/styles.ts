import { TextInput } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContentInput = styled(TextInput)`
    height: 40px;
    width: 270px;

    border-radius: 5px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.main};

    padding: 10px;
    margin-left: 10px;

    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.header};
`;

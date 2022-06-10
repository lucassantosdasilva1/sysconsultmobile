import React from 'react';
import { Image, } from 'react-native';

import { ButtonReload, Container, Logo, Icon, WrapAll } from './styles';


//<ButtonReload><Icon name="reload1" size={24} color="white" /></ButtonReload>

export function Header() {

    return (
        <Container>
            <WrapAll>
                <Logo source={require('../../assets/logo.jpg')} />
                
            </WrapAll>
        </Container>
    )
};
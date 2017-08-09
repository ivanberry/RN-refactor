import React from 'react';
import { View, StatusBar } from 'react-native';
import { Container, styles } from '../components/Container';
import { Logo} from '../components/Logo';

export default () => (
    <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <View />
    </Container>
) 

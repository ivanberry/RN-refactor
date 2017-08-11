import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, styles } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';

const TEMP_BASS_CURRENCY = 'CNY';
const TEMP_QUOTE_CURRENCY = 'USD';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRIE = '80';

class Home extends Component {
    handlerPress = () => {
        console.log('base press');
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Logo />
                <InputWithButton
                    buttonText={TEMP_BASS_CURRENCY}
                    onPress={this.handlerPress}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType='numeric'
                    
                />
                <InputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlerPress}
                    defaultValue={TEMP_QUOTE_PRIE}
                    editable={false}
                />
            </Container>
        );
    }
}

export default Home;
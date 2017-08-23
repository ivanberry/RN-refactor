import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container, styles } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import PropTypes from 'prop-types';

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const TEMP_BASS_CURRENCY = 'CNY';
const TEMP_QUOTE_CURRENCY = 'USD';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRIE = '80';
const TEMP_CURRENCY_RATE = 0.7;
const TEMP_CONVERTER_TIME = new Date();

class Home extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    };

    handlerBasePress = () => {
        console.log('base press');
        this.props.navigation.navigate('CurrencyList', { title: 'Base currency list' });
    }

    handlerQuotePress = () => {
        console.log('quote press');
        this.props.navigation.navigate('CurrencyList', { title: 'Quate currency list' })
    }

    handleSwapCurrency = () => {
        console.log('swap currency happened!', this.props);
        console.log(swapCurrency());
    }

    handleOptionOnPress = () => {
        console.log('option pressed');
        this.props.navigation.navigate('Options');
    }

    handleNumberChange = (amount) => {
        console.log(changeCurrencyAmount(amount)); 
        console.log('number changing...');
    }


    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header onPress={this.handleOptionOnPress} />
                <KeyboardAvoidingView behavior='padding'>
                    <Logo />
                    <InputWithButton
                        buttonText={TEMP_BASS_CURRENCY}
                        onPress={this.handlerBasePress}
                        defaultValue={TEMP_BASE_PRICE}
                        keyboardType='numeric'
                        onChangeText={this.handleNumberChange}

                    />
                    <InputWithButton
                        buttonText={TEMP_QUOTE_CURRENCY}
                        onPress={this.handlerQuotePress}
                        defaultValue={TEMP_QUOTE_PRIE}
                        editable={false}
                    />
                    <LastConverted
                        base={TEMP_BASS_CURRENCY}
                        quote={TEMP_QUOTE_CURRENCY}
                        data={TEMP_CONVERTER_TIME}
                        conversionRate={TEMP_CURRENCY_RATE}
                    />
                    <ClearButton
                        onPress={this.handleSwapCurrency}
                        text="Reverse Currency"
                    />
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

export default Home;
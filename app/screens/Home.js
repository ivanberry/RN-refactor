import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Container, styles } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import PropTypes from 'prop-types';

import { swapCurrency, changeCurrencyAmount, getInitialConversions } from '../actions/currencies';

const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRIE = '80';
const TEMP_CURRENCY_RATE = 0.7;
const TEMP_CONVERTER_TIME = new Date();

class Home extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        isFetching: PropTypes.bool,
        LastConvertedDate: PropTypes.object,
        primaryColor: PropTypes.string,
        textColor: PropTypes.string,
    };

    componentWillMount() {
        this.props.dispatch(getInitialConversions());
    }

    handlerBasePress = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Base currency list', type: 'base' });
    }

    handlerQuotePress = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Quate currency list', type: 'quote' })
    }

    handleSwapCurrency = () => {
        this.props.dispatch(swapCurrency());
    }

    handleOptionOnPress = () => {
        this.props.navigation.navigate('Options');
    }

    handleNumberChange = (amount) => {
        this.props.dispatch(changeCurrencyAmount(amount));
    }

    render() {
        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
        if (this.props.isFetching) {
            quotePrice = '...';
        }

        return (
            <Container backgroundColor={this.props.primaryColor}>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header onPress={this.handleOptionOnPress} />
                <KeyboardAvoidingView behavior='padding'>
                    <Logo tintColor={this.props.primaryColor} />
                    <InputWithButton
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlerBasePress}
                        defaultValue={this.props.amount.toString()}
                        keyboardType='numeric'
                        onChangeText={this.handleNumberChange}
                        textColor={this.props.primaryColor}

                    />
                    <InputWithButton
                        buttonText={this.props.quoteCurrency}
                        onPress={this.handlerQuotePress}
                        defaultValue={quotePrice}
                        editable={false}
                        textColor={this.props.primaryColor}
                    />
                    <LastConverted
                        base={this.props.baseCurrency}
                        quote={this.props.quoteCurrency}
                        data={this.props.lastConvertedDate}
                        conversionRate={this.props.conversionRate}
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

//Why didi this will execute times?
const mapStateToProps = (state) => {
    console.log(state);
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};

    return {
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 1,
        isFetching: conversionSelector.isFetching,
        lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
        primaryColor: state.theme.primaryColor,
    };
}

export default connect(mapStateToProps)(Home);
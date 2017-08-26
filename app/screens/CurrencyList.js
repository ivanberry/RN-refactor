import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

class CurrencyList extends Component {
    hanlePress = (currency) => {
        const { type } = this.props.navigation.state.params;
        console.log(type);
        if (type === 'base') {
            this.props.dispatch(changeBaseCurrency(currency));
        } else {
            this.props.dispatch(changeQuoteCurrency(currency));
        }

        this.props.navigation.goBack(null);
    }

    render() {
        let comparisonCurrency = this.props.baseCurrency;
        if (this.props.navigation.state.params.type === 'quote') {
            comparisonCurrency = this.props.quoteCurrency;
        }

        console.log(this.props);
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="default" />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === comparisonCurrency}
                            onPress={() => this.hanlePress(item)}
                            checkmarked={true}
                            visible={true}
                            iconBackground={this.props.primaryColor}
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )

    }

}

const mapStateToProps = (state) => ({
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.theme.primaryColor,
});

export default connect(mapStateToProps)(CurrencyList);
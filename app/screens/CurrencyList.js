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
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="default" />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === 'CAD'}
                            onPress={() => this.hanlePress(item)}
                            checkmarked={true}
                            visible={true}
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )

    }

}

export default connect()(CurrencyList);
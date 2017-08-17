import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import currencies from '../data/currencies';
import ListItem from '../components/List';

class CurrencyList extends Component {
    hanlePress = () => {
        console.log('row press');
    }

    render() {
        return (
            <FlatList
                data={currencies}
                renderItem={({ item }) => (
                    <Text>{item}</Text>
                )}
                keyExtractor={item => item}
            />
        )

    }

}

export default CurrencyList;
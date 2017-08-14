import React from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import currencies from '../data/currencies';

const CurrencyList = () => (
    <FlatList
        data={currencies}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={item => item}
    />
)

export default CurrencyList;
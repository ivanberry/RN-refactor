import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BidList from './components/BidList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BidList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

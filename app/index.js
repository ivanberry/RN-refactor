import React from 'react';

import EStylesSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';

EStylesSheet.build({
  $primaryBlue: '#4f6d7a',
  $white: '#fff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
  $darkText: '#343434',
  // outline: 1, //show the block view of element
});


export default () => <CurrencyList />

// import BidList from './components/BidList';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <BidList />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

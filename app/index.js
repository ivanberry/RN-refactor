import React from 'react';

import EStylesSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStylesSheet.build({
  $primaryBlue: '#4f6d7a',
  $white: '#fff',
});


export default () => <Home />

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

import React from 'react';
import { Provider } from 'react-redux';

import EStylesSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';
import store from './config/store';

EStylesSheet.build({
  $primaryBlue: '#4f6d7a',
  $white: '#fff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
  $darkText: '#343434',
  $primaryGreen: '#00cdbc',
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryPurple: '#9E768F',
  // outline: 1, //show the block view of element
});


export default () => (
  <Provider store={store}>
    <Navigator onNavigationStateChange={null} />
  </Provider>
)

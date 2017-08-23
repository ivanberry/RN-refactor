import React from 'react';

import EStylesSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';

import './reducers';

EStylesSheet.build({
  $primaryBlue: '#4f6d7a',
  $white: '#fff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
  $darkText: '#343434',
  $primayGreen: '#00cdbc',
  // outline: 1, //show the block view of element
});


export default () => <Navigator />

import React from 'react';
import PropTypes from 'prop-types';
import { TouchabbleOpacity, View, Text, Image } from 'react-native';

import styles from './styles';

const ClearButton = ({text, onPress}) => (
    <TouchabbleOpacity onPress={onPress}>
        <Image />
        <Text>{text}</Text>
    </TouchabbleOpacity>
);

export default ClearButton;


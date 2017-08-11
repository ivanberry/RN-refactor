import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View>
            <Image source={require('./images/logo.png')} />
            <Text>{text}</Text>
        </View>
    </TouchableOpacity>
);

ClearButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
};

export default ClearButton;


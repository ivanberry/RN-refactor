import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';

import styles from './styles';

const InputWithButton = ({ onPress, buttonText, editable }) => (
    <View style={styles.container}>
        <TouchableHighlight style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.border} />
        <TextInput style={styles.input} />
    </View>
);

InputWithButton.PropTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
};

export default InputWithButton;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
    const containerStyles = [styles.container];
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

    if (props.editable === false) {
        containerStyles.push(styles.containerDisabled);
    }

    return (
        <View style={containerStyles}>
            <TouchableHighlight
                onPress={props.onPress}
                underlayColor={underlayColor}
                style={styles.buttonContainer}
            >
                <Text style={styles.buttonText}>{props.buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.seperator} />
            <TextInput style={styles.input} {...props} underlineColorAndroid="transparent" />
        </View>
    )

};

InputWithButton.PropTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
};

export default InputWithButton;

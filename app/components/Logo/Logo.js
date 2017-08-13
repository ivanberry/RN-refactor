import React, { Component } from 'react';
import { View, Image, Text, Keyboard, Animated } from 'react-native';

import styles from './styles';

const ANIMATED_TIME = .2;

class Logo extends Component {

    constructor(props) {
        super(props);
        this.containerImageWidth = new Animated.Value(styles.$largeImageContainerSize);
        this.imageWidth = new Animated.Value(styles.$largeImageSize);
    }

    componentWillMount() {
        this.keyboardShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardShow);
        this.keyboardHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardHide);
    }

    componentWillUnmount() {
        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();
    }

    keyboardShow = () => {
        Animated.parallel([
            Animated.timing(this.containerImageWidth, {
                toValue: styles.$smallImageContainerSize,
                during: ANIMATED_TIME,
            }),
            Animated.timing(this.imageWidth, {
                toValue: styles.$smallImageSize,
                during: ANIMATED_TIME,
            }),
        ]).start();
    }

    keyboardHide = () => {
        Animated.parallel([
            Animated.timing(this.containerImageWidth, {
                toValue: styles.$largeImageContainerSize,
                during: ANIMATED_TIME,
            }),
            Animated.timing(this.imageWidth, {
                toValue: styles.$largeImageSize,
                during: ANIMATED_TIME,
            }),
        ]).start();
    }

    render() {
        const containerImageStyle = [
            styles.containerImage,
            { width: this.containerImageWidth, height: this.containerImageWidth },
        ];

        const imageStyle = [
            styles.logo,
            { width: this.imageWidth },
        ]
        return (
            <View style={styles.container}>
                <Animated.Image
                    resizeMode="contain"
                    style={containerImageStyle}
                    source={require('./images/background.png')}
                >
                    <Animated.Image resizeMode="contain" style={imageStyle} source={require('./images/logo.png')} />
                </Animated.Image>
                <Text style={styles.text}>Currency Converter</Text>
            </View>
        )
    }
}

export default Logo;
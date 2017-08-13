import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = (props) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Image style={styles.icon} resizeMode="contain" source={require('./images/gear.png')} />
        </TouchableOpacity>
    </View>
);

Header.propTypes = {
    onPress: PropTypes.func,
};

export default Header;
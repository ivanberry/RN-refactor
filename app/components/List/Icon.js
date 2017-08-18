import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = () => (
    <View style={styles.icon}>
        <Image source={require('./icon/check.png')} style={styles.iconVisible} />
    </View>
);

export default Icon;
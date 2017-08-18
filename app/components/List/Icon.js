import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = () => (
    <View style={styles.icon}>
        <Image resizeMode='contain' source={require('./icon/check.png')} style={styles.iconVisible} />
    </View>
);

export default Icon;
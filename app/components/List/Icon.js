import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = ({ checkmarked, visible=true, iconBackground }) => {
    const iconStyle = [styles.icon];

    if (visible) {
        iconStyle.push(styles.iconVisible);
    }

    if (iconBackground) {
        iconStyle.push({backgroundColor: iconBackground});
    }

    return (
        <View style={iconStyle}>
            {checkmarked ?
                <Image resizeMode='contain' style={styles.checkmarked} source={require('./images/check.png')} />
                :
                null
            }
        </View>
    )
};

export default Icon;
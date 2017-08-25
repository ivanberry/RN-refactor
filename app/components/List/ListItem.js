import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Icon from './Icon';
import styles from './styles';

const ListItem = ({ text, onPress, selected, checkmarked, visible, customIcon = null, iconBackground }) => (
    <TouchableHighlight onPress={onPress}>
        <View style={styles.row}>
            <Text style={styles.text}>
                {text}
            </Text>
            {selected ? <Icon checkmarked={checkmarked} visible={visible} iconBackground={iconBackground} /> : null}
            {customIcon}
        </View>
    </TouchableHighlight>
);

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    customIcon: PropTypes.element,
};

export default ListItem;
import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native'
import PropTypes from 'prop-types';

const ListItem = (text, onPress, selected) => (
    <TouchableHighlight>
        <View>
            <Text>
                {text}
            </Text>
        </View>
    </TouchableHighlight>
);

ListItem.prototypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
};

export default ListItem;
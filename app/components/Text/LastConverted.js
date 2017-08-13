import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './styles';

const LastConverted = (props) => (
    <Text style={styles.smalltext}>
        1 {props.base} = {props.conversionRate} {props.quote} as of {moment(props.data).format('MMMM D, YYYY')}
    </Text>
)

LastConverted.propTypes = {
    data: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number,
};

export default LastConverted;
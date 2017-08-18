import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const styles = EStyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '$white',
    },
    text: {
        fontSize: 16,
        color: '$darkText',
    },
    separator: {
        marginLeft: 20,
        backgroundColor: '$border',
        flex: 1,
        height: StyleSheet.hairlineWidth,
    },
    icon: {
    },
    iconVisible: {
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '$primayGreen',
    }
});

export default styles;
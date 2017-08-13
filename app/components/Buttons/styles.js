import StyleSheet from 'react-native-extended-stylesheet';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 19,
        marginRight: 6,
    },
    text: {
        color: '$white',
        fontSize: 14,
        fontWeight: '300',
        letterSpacing: -.5,
        paddingVertical: 20,
    },
});
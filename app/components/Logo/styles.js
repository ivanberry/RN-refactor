import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width /2;

export default EStyleSheet.create({
    container: {
       alignItems: 'center',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth,
    },
    image: {
        width: imageWidth / 2,
    },
    text: {
        letterSpacing: -0.5,
        color: '$white',
        fontSize: 28,
        letterSpacing: -0.5,
        marginTop: 15,
    }
});
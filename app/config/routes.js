import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        }
    },
    Options: {
        screen: Options,
        navigationOptions: {
            headerTitle: 'Options',
        },
    },
    Themes: {
        screen: Themes,
    },
}, {
    headerMode: 'screen',    
});

export default StackNavigator(
    {
        Home: {
            screen: HomeStack,
        },
        CurrencyList: {
            screen: CurrencyList,
            navigationOptions: ({ navigation }) => ({
                headerTitle: navigation.state.params.title,
            }),
        },
    }, {
        mode: 'modal',
        cardStyle: { paddingTop: StatusBar.currentHeight },
        headerMode: 'none',
    },
);
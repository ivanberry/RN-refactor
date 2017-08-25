import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import {connect} from 'react-redux';
import EStylesheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';
import {changePrimaryColor} from '../actions/theme';

const styles = EStylesheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

class Themes extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
    };

    handleThemePress = (color) => {
        this.props.dispatch(changePrimaryColor(color));
        this.props.navigation.goBack();
    };

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle='default' />
                <ListItem
                    text='Blue'
                    selected
                    checkmarked={false}
                    onPress ={() => this.handleThemePress(styles.$blue)}
                    iconBackground={styles.$blue}
                />
                <Separator />
                <ListItem
                    selected
                    text='Green'
                    onPress ={() => this.handleThemePress(styles.$green)}
                    iconBackground={styles.$green}
                />
                <Separator />
                <ListItem
                    selected
                    text='Purple'
                    onPress ={() => this.handleThemePress(styles.$purple)}
                    iconBackground={styles.$purple}
                />
                <Separator />
                <ListItem
                    selected
                    text='Orange'
                    onPress ={() => this.handleThemePress(styles.$orange)}
                    iconBackground={styles.$orange}
                />
                <Separator />
            </ScrollView>
        )
    }
}

export default connect()(Themes);
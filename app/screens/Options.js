import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    };

    handleThemesPress = () => {
        console.log('themes');
        this.props.navigation.navigate('Themes');
    }

    handleSitePress = () => {
        console.log('site');
        Linking.openURL('http://v2ex.com').catch(() => alert('An error happended'));
    }

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle='default' />
                <ListItem
                    text="Themes"
                    onPress={this.handleThemesPress}
                    customIcon={<Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />}
                />
                <Separator />
                <ListItem
                    text="V2EX"
                    onPress={this.handleSitePress}
                    customIcon={<Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />}
                />
            </ScrollView>
        )
    }
}

export default Options;
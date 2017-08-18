import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';

class Themes extends Component {
    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle='default' />
                <ListItem
                    text='Blue'
                    selected
                    checkmarked={false}
                />
                <Separator />
                <ListItem
                    text='Green'
                />
                <Separator />
                <ListItem
                    text='Purple'
                />
                <Separator />
                <ListItem
                    text='Orange'
                />
                <Separator />
            </ScrollView>
        )
    }
}

export default Themes;

import React from 'react';
import { StyleSheet, Text, View, Image, ListView, ActivityIndicator } from 'react-native';

import BidListItem from './BidListItem';

import axios from 'axios';

class BidList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
        };
    }

    componentDidMount() {
        this.getBidListsItem();
    }

    getBidListsItem() {
        const URL = 'http://192.168.0.66/wrb/biditems.json?m=bidlist_v4';
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        axios.post(URL, {
            sort_desc: null,
            bid_invest_type: null,
            limit: 10,
            page: 1,
        })
            .then((res) => {
                console.log(res.data.bidlist);
                this.setState({
                    dataSource: ds.cloneWithRows(res.data.bidlist)
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <View>
                {!this.state.dataSource &&
                    <ActivityIndicator />
                }
                {this.state.dataSource &&
                    <ListView
                        dataSource={this.state.dataSource}
                    renderRow={(rowData) => <BidListItem {...rowData} />}
                    />
                }
            </View>
        )
    }

}

export default BidList;
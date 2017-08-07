
import React from 'react';
import { StyleSheet, Text, View, Image, ListView, ActivityIndicator } from 'react-native';

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
        const URL = 'http://192.168.0.66/mock/bidlist_v2';
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        axios.post(URL, {
            sort_desc: null,
            bid_invest_type: null,
            limit: 10,
            page: 1,
        })
            .then((res) => {
                console.log(res.data.bidlist, this);
                this.setState({
                    dataSource: ds.cloneWithRows(res.data.bidlist)
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    renderListItem(item) {

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
                        renderRow={(rowData) => <Text>{rowData.ws_name + '-' + rowData.title}</Text>}
                    />
                }
            </View>
        )
    }

}

export default BidList;
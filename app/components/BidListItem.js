import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});

const IMG_URL_BASE = 'http://192.168.0.66/hybrid/fclc2/res/img/ws_logo/';

const BidListItem = (props) => (
    <View style={styles.container}>
        <View>
            <Image source={{ uri: this.IMG_URL_BASE + props.wn + '.png' }} style={styles.photo} />
            <Text >
                {`${props.ws_name} ${props.createTime}`}
            </Text>
        </View>
        <View>
            
        </View>
    </View>
)

export default BidListItem;
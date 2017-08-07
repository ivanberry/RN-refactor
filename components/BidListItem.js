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
})

const BidListItem = (props) => (
    <View style={styles.container}>
        <Image source={{ uri: props.imgUrl }} style={styles.photo} />
        <Text >
            {`${props.ws_name} ${props.createTime}`}
        </Text>
    </View>
)

export default BidListItem;
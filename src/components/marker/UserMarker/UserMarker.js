import React from 'react'
import { Image, View } from 'react-native'
import { Marker } from "react-native-maps"
import styles from "./UserMarker.style"

const UserMarker = ({ coordinates, userImageURL, onSelect }) => {
    return (
        <Marker coordinate={coordinates} onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: userImageURL }} />
            </View>
        </Marker>
    )
}

export default UserMarker

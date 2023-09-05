import { ActivityIndicator } from 'react-native'
import React from 'react'
import styles from "./Loading.style"

const Loading = () => {
    return (
        <ActivityIndicator color="blue" size={'large'} style={styles.container}>
        </ActivityIndicator>
    )
}

export default Loading

import { Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import styles from "./InfoCard.style"
import Modal from "react-native-modal"

const InfoCard = ({ visible, close, user }) => {
    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            swipeDirection={"down"}
            onSwipeCancel={close}
            onBackButtonPress={close}
            onBackdropPress={close}
            backdropOpacity={0.2}
        >
            <View style={styles.container}>
                <Text style={styles.username}>{user.username}</Text>
                <Text style={styles.fullname}>{user.first_name} {user.last_name}</Text>
                <SafeAreaView style={styles.safeArea}></SafeAreaView>
            </View>
        </Modal>
    )
}

export default InfoCard

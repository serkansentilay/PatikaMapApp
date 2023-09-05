import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        position: 'absolute',
        //position:'absolute' görüntünün üzerine geçiyor, böylelikle haritanın üstünde göstereceğiz
        bottom: 300,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
    }
})
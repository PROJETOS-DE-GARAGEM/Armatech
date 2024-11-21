import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#283949',
    },
    ViewCenter: {
        marginTop: 25,
        marginLeft: 20,
    },
    Title: {
        color: "#fff",
        fontSize: 23,
        fontWeight: "bold",
    },
    areaPerfil: {
        marginTop: 15,
        backgroundColor: '#fff',
        marginRight: 20,
        height: 80,
        marginBottom: 20,
        borderRadius: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ViewNameProfile: {
        flexDirection: 'row',
        gap: 10,
    },
    userTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    userConta: {
        fontSize: 13,
        color: '#808080',
    },
    buttonProfile:{
        backgroundColor: '#32bc9b',
        marginRight: 10,
        width: 80,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButtonProfile: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    },
})

export default styles;
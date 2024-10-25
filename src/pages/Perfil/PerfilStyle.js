import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#283949',
    },
    ViewProfile: {
        flex: 1,
        justifyContent: 'space-around',
    },
    userBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    NameUser: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    containerInformation: {
        height: '10%',
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 25,
        marginStart: "3%",
        marginEnd: "3%",
    },
    informationTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 10,
    },
    information: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    borderInformation: {
        borderBottomWidth: 0.7,
        borderColor: '#e5e7eb'
    },
    informationText: {
        margin: 25,
        color: '#999',

    },
    buttonLogout: {
        marginTop: 15,
        backgroundColor: '#ff784b',
        borderRadius: 999,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        alignItems:'center',
    },
})

export default style;
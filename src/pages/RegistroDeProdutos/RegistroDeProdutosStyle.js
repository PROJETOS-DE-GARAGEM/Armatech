import { StyleSheet } from "react-native";

const style = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: "#283949",
    },
    keyboardAvoid: {
        flex: 1,
    },
    boxContainer: {
        paddingTop: "10%",
        flexDirection: "column",
        gap: 25,
    },
    boxDescription: {
        gap: 10,
    },
    Title: {
        paddingTop: "10%",
        marginLeft: "5%",
        color: "#fff",
        fontSize: 23,
        fontWeight: "bold",
        flexDirection: "row",
    },
    text: {
        marginLeft: "5%",
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
    },
    Input: {
        color: "#000",
        fontSize: 17,
        height: 40,
        borderBottomWidth: 1,
        borderColor: "#fff",
        marginStart: "5%",
        marginEnd: "5%",
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 9,
    },
    boxRow: {
        paddingTop: "8%",
        flexDirection: "column",
        marginStart: "5%",
        marginEnd: "5%",
    },
    boxTitle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
    },
    boxInput: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
        paddingHorizontal: 7,
        borderWidthBotton: 1,
    },
    Input2: {
        color: "#000",
        width: 120,
        alignItems: 'center',
        paddingHorizontal: 9,
        fontSize: 17,
        height: 40,
        borderBottomWidth: 1,
        borderColor: "#fff",
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    btnBox: {
        flexDirection: "row",
    },
    btn: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignContent: 'center',
        margin: 17,
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        color: '#fff'
    },
})

export default style;
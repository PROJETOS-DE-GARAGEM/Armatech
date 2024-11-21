import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#283949",
    },
    contentResume: {
        justifyContent: 'space-around',
        flexDirection: 'column',
        gap: 20,
        marginBottom: 10,
    },
    tittlePage: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 20,
        marginStart: '5%',
        paddingBottom: 20,
    },
    tittleResultMensal: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    tittleTextResults: {
        fontSize: 16,
        padding: 5,
    },
    textResult: {
        fontWeight: 'bold',
    },
    ViewResultsBox: {
        backgroundColor: '#FFF',
        marginStart: '5%',
        marginEnd: '5%',
        borderRadius: 5,
        padding: 15,
    },
    // viewTittleResultMensal: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    ViewDetailsResultSize: {

    },

    dateText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 20,
        marginStart: '5%',
    },

    itemContainer: {
        marginBottom: 10,
    }, textContainer: {
        fontSize: 15,
        
    }
})

export default style;
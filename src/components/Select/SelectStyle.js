import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    
    modalView: {
        width: '90%',
        height: 170,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        flexDirection: 'column',
        borderWidth: 1
    },
    buttonModal: {
        width: "70%",
        color: "#000",
        borderWidth: 1,
        fontSize: 17,
        height: 40,
        backgroundColor: "#ff784b",
        borderRadius: 10,
        paddingHorizontal: 9, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    textModalView: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 23,
        color: '#fff',
    }, 
    buttonSelect: {
        width: "90%",
        color: "#000",
        fontSize: 17,
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 9, 
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',  
    },
    textButtton: {
        fontSize: 17,
    },
    listaTamanho: {
        backgroundColor: '#283949',
        borderWidth: 1,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 10,
        marginLeft: 10,

    },
    textList: {
        fontSize: 23,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default styles;

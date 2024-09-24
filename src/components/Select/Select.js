import React, {useState} from "react";
import { View,
Text, 
StyleSheet, 
Modal, 
FlatList, 
TouchableOpacity,
SafeAreaView,
} from "react-native";
import styles from "./SelectStyle";
import ChevronDown from "../../../assets/svg/ChevronDown";

const Select = ({onChangeSelect, txt}) => {
    const [text, setText] = useState(txt);
    const [ModalVisible, setModalVisible] = useState(false);
     const [listTamanho, setListTamanho] = useState([
         {id: 1, tamanho: 'PP'},
         {id: 2, tamanho: 'P'},
         {id: 3, tamanho: 'M'},
         {id: 4, tamanho: 'G'},
         {id: 5, tamanho: 'GG'},
 ]);

     function renderOption(item){
         return (
                <TouchableOpacity style={styles.listaTamanho}
                    onPress={() => {
                    onChangeSelect(item.id);
                    setText(item.tamanho);
                    setModalVisible(!ModalVisible);}}>
                    <Text style={styles.textList}>{item.tamanho}</Text>
                </TouchableOpacity>
    );
 }

    return(

        <View style={styles.containerView}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={ModalVisible}
            onRequestClose={() => {setModalVisible(!ModalVisible)}}
            >
        <View style={styles.containerView}>
        <View style={styles.modalView}>

            <FlatList
            data={listTamanho}
            horizontal
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => renderOption(item)}
            />  

            <TouchableOpacity style={styles.buttonModal}
            onPress={() => setModalVisible(!ModalVisible)}>
            <Text style={styles.textModalView}>Cancelar</Text>
            </TouchableOpacity> 

        </View>
        </View>
        </Modal>
        <TouchableOpacity style={styles.buttonSelect}
        onPress={() => setModalVisible(true)}>
            <Text style={styles.textButtton}>{text || 'Selecione o tamanho'}</Text>
            <ChevronDown/>
        </TouchableOpacity>
        </View>
    )
}

export default Select;
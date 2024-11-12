import React from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import style from "./RecuperacaoSenhaStyle";

const ModalForgotPassword = ({ modalVisible, setModalVisible, enviar }) => {
  return (
    <Modal visible={modalVisible} animationType="Slide" transparent={true}>
      <View style={style.container}>
        <View style={style.subContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={style.closeButton}
          >
            <Text style={style.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={style.message}>Recuperar Senha</Text>
          <Text>
            Por favor entre com o seu email. Você receberá um link para criar
            uma nova senha via email.
          </Text>
          <Text style={style.title}>Email</Text>
          <TextInput
            style={style.input}
            placeholder="Digite o seu email..."
          ></TextInput>
          <TouchableOpacity style={style.botao} onPress={enviar}>
            <Text style={style.botaoText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalForgotPassword;

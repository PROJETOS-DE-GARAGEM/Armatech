import React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./ModalEditarProdutoStyle";

const ModalEditarProduto = ({
  produtoEditado,
  atualizarProduto,
  modalVisible,
  setModalVisible,
  salvarEdicao,
}) => {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Text style={styles.Title}>Editar Produto</Text>

            <View style={styles.boxDescription}>
              <Text style={styles.text}>Nome do produto</Text>
              <TextInput
                value={produtoEditado?.nomeDoProduto || ""}
                onChangeText={(valor) =>
                  atualizarProduto("nomeDoProduto", valor)
                }
                placeholder="Nome do Produto"
                style={styles.TextInput}
              />
            </View>

            <View style={styles.boxDescription}>
              <Text style={styles.text}>Descrição</Text>
              <TextInput
                value={produtoEditado?.descricao || ""}
                onChangeText={(valor) =>
                  atualizarProduto("descricao", valor)
                }
                placeholder="Nome do Produto"
                style={styles.TextInput}
              />
            </View>

            <View style={styles.boxDescription}>
              <Text style={styles.text}>Preço</Text>
              <TextInput
                value={produtoEditado?.preco || ""}
                onChangeText={(valor) =>
                  atualizarProduto("preco", parseFloat(valor))
                }
                placeholder="Preco"
                keyboardType="numeric"
                style={styles.TextInput}
              />
            </View>

            <View style={styles.boxDescription}>
              <Text style={styles.text}>Quantidade</Text>
              <TextInput
                value={produtoEditado?.quantidade || ""}
                onChangeText={(valor) =>
                  atualizarProduto("quantidade", valor, parseInt(valor))
                }
                placeholder="Quantidade"
                keyboardType="numeric"
                style={styles.TextInput}
              />
            </View>

            <View style={styles.buttonBox}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#32bc9b" }]}
                onPress={salvarEdicao}
              >
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#ff784b" }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalEditarProduto;
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./IntegracaoDeVendasStyle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Dropdown } from "react-native-element-dropdown";

export default function IntegracaoDeVendas({ navigation }) {
  const [value, setValue] = useState(null);

  // Dados para o dropdown
  const data = [
    { label: "Produto 1", value: "1" },
    { label: "Produto 2", value: "2" },
    { label: "Produto 3", value: "3" },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header titulo="Integração de Vendas" navigation={navigation} />

        <View>
          <Text style={styles.text}>Pesquisar Produto: </Text>
          {/* Dropdown */}
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data} // Definindo a variável de dados
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Selecione o Produto..."
            searchPlaceholder="Buscar..."
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
            containerStyle={styles.dropDownContainerStyle}
          />
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.boxSell}>
            <Text style={styles.textSell}>Nome do Produto: </Text>
            <Text style={styles.textSell}>Preço: </Text>
            <Text style={styles.textSell}>Estoque disponivel: </Text>
            {/* Container da quantidade e do tamanho */}
            <View>
              <Text style={styles.textSell}>Quantidade: </Text>
              <TextInput
                keyboardType="numeric"
                placeholder="0"
                style={styles.quantidadeInput}
              ></TextInput>
              <Text style={styles.textSell}>Tamanho: </Text>
              <Dropdown
                style={styles.dropdownSize}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={data} // Definindo a variável de dados
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder=""
                searchPlaceholder="Buscar..."
                value={value}
                onChange={(item) => {
                  setValue(item.value);
                }}
                containerStyle={styles.dropDownContainerStyle}
              />
            </View>
          </View>
          <View style={styles.boxTransaction}>
            <Text style={styles.textTrasanction}>Resumo da transação: </Text>
            <Text style={styles.textSell}>Produto: </Text>
            <Text style={styles.textSell}>Tamanho: </Text>
            <Text style={styles.textSell}>Quantidade:</Text>
            <Text style={styles.textSell}>Preço Total:</Text>
          </View>
          <View style={styles.BoxButton}>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Footer />
      </View>
    </TouchableWithoutFeedback>
  );
}

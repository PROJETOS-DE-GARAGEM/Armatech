import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
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
          placeholder="Digite o nome do Produto..."
          searchPlaceholder="Buscar..."
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
          containerStyle={styles.dropDownContainerStyle}
        />
      </View>
      <Text style={styles.textDescricao}>Descrição</Text>
      <TextInput style={styles.Input} placeholder="Descrição"></TextInput>

      <Footer />
    </View>
  );
}

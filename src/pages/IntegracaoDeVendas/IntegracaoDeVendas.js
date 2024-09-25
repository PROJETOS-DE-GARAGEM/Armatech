import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./IntegracaoDeVendasStyle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from 'react-native-vector-icons/AntDesign'; // Import correto

export default function IntegracaoDeVendas({ navigation }) {
  const [value, setValue] = useState(null);

  // Dados para o dropdown
  const data = [
    { label: 'Produto 1', value: '1' },
    { label: 'Produto 2', value: '2' },
    { label: 'Produto 3', value: '3' },
  ];

  return (
    <View style={styles.container}>
      <Header titulo="Integração de Vendas" navigation={navigation} />
      
      {/* Titulo */}
      <View>
        <Text style={styles.title}>Nova Venda</Text>
      </View>
      
      <View>
        <Text style={styles.label}>Nome do Produto</Text>
      </View>

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
        placeholder="Selecione um item"
        searchPlaceholder="Buscar..."
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
        
      />

      <Footer />
    </View>
  );
}

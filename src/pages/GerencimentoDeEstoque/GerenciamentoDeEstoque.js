import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Dropdown } from "react-native-element-dropdown";

import style from "./GerenciamentoDeEstoqueStyle";
import Header from "../../components/Header/Header";


export default function GerenciamentoDeEstoque({navigation}) {
  const [produto, setProduto] = useState(null);
  const listProducts = [
    {id: 1, nome: "Short Zara", description: "Descrição do produto 1", price: "R$00,00", estoque: "1"},
    {id: 2, nome: "Saia Analu Cargo", description: "Descrição do produto 2", price: "R$00,00", estoque: "2"},
    {id: 3, nome: "Calça Zara", description: "Descrição do produto 3", price: "R$00,00", estoque: "3"},
];

function renderOption(item){
  return (
         <View style={style.boxListContainer}>
            <View style={style.boxListEstoque}>
            <Text style={style.nameList}>{item.nome}</Text>

            <Text style={style.detailsList}>Descrição: {item.description}</Text>
            <Text style={style.detailsList}>Preço: {item.price}</Text>
            <Text style={style.detailsList}>Disponível: {item.estoque} Unidades</Text>
            </View>
            
          <View style={style.boxIconStyle}>
            <TouchableOpacity>
            <Ionicons name="trash" size={30} color='#ff784b'/>
            </TouchableOpacity>
            <TouchableOpacity>
            <FontAwesome name="edit" size={30} color='#32bc9b'/>
            </TouchableOpacity>
          </View>

         </View>
  );
}

  return (
    <View style={style.container}>
      <Header titulo="Gerenciamento de Estoque" navigation={navigation} />
      
      <View style={style.ViewTitle}>
          <Text style={style.textTitle}>Lista de Produtos</Text>
         <TouchableOpacity style={style.buttonAddProduct}>
          <Text style={style.textButton}>Adicionar +</Text>
        </TouchableOpacity>
      </View>
      <View style={style.containerDropdown}>
          <Text style={style.text}>Pesquisar Produto: </Text>
      
          <Dropdown
            style={style.dropdown}
            placeholderStyle={style.placeholderStyle}
            selectedTextStyle={style.selectedTextStyle}
            inputSearchStyle={style.inputSearchStyle}
            iconStyle={style.iconStyle}
            data={listProducts}
            search
            maxHeight={300}
            labelField="nome"
            valueField="produto"
            placeholder="Selecione o Produto..."
            searchPlaceholder="Buscar..."
            value={produto}
            onChange={(item) => {
              setProduto(item.produto);
            }}
            containerStyle={style.dropDownContainerStyle}
          />
        </View>
      <View style={style.ViewFlatlist}>

        <FlatList
        data={listProducts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => renderOption(item)}
        />

      </View>

    </View>
  );
}

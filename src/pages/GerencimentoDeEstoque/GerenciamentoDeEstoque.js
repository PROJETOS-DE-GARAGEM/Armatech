import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Dropdown } from "react-native-element-dropdown";

import style from "./GerenciamentoDeEstoqueStyle";
import Header from "../../components/Header/Header";
import { ProdutoService } from "../../../service/CasdastrarProdutos";

export default function GerenciamentoDeEstoque({ navigation }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null); //Irá armazenar o produto selecionado
  const [produtos, setProdutos] = useState([]); // Irá armazenar a lista de produtos que será carregada da API
  const [produtosFiltrados, setProdutosFiltrados] = useState([]); //Irá armazenar os produtos que serão exibidos na tela após a aplicação de um filtro

  useEffect(() => {
    //Função para buscar prosdutos ao carregar a tela do estoque
    async function carregarProdutos() {
      try {
        const produtoService = new ProdutoService();
        const produtoListados = await produtoService.ListarProdutos(); //Buscar os produtos da API
        setProdutos(produtoListados); //Armazena a lista completa para uso futuro
        setProdutosFiltrados(produtoListados); //Inicia exibindo todos os produtos mas poderá ao pesquisar um produto especifico
      } catch (error) {
        console.error("Erro ao carregar produtos: ", error);
      }
    }
    carregarProdutos();
  }, []); // O [] vazio indica que essa função séra executada apenas uma vez

  //Função para renderizar cada produto
  function renderOption(item) {
    return (
      <View style={style.boxListContainer}>
        <View style={style.boxListEstoque}>
          <Text style={style.nameList}>{item.nomeDoProduto}</Text>
          <Text style={style.detailsList}>Descrição: {item.descricao}</Text>
          <Text style={style.detailsList}>Preço: {item.preco}</Text>
          <Text style={style.detailsList}>
            Disponível: {item.quantidade} Unidades
          </Text>
        </View>

        <View style={style.boxIconStyle}>
          <TouchableOpacity>
            <Ionicons name="trash" size={30} color="#ff784b" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="edit" size={30} color="#32bc9b" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  //TO DO: Listar todos os produtos caso a search fique vazia.

  //Função para filtrar os produtos com base na seleção do dropdown
  const filtrarProdutos = (produtoSelecionado) => {
    if (!produtoSelecionado || produtoSelecionado.trim() === "") {
      setProdutosFiltrados(produtos); // Irá mostrar todos os produtos se nada for selecionado
    } else {
      const produtosFiltrados = produtos.filter((produto) => {
        return produto.nomeDoProduto
          ? produto.nomeDoProduto
              .toLowerCase()
              .includes(produtoSelecionado.toLowerCase())
          : false;
      });
      setProdutosFiltrados(produtosFiltrados); // Atuliza a lista com os produtos filtrados
    }
  };

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
          data={produtos}
          search
          maxHeight={300}
          labelField="nomeDoProduto"
          valueField="nomeDoProduto"
          placeholder="Selecione o Produto..."
          searchPlaceholder="Buscar..."
          value={produtoSelecionado}
          onChange={(item) => {
            setProdutoSelecionado(item.nomeDoProduto); // Atualiza o estado com o produto selecionado
            filtrarProdutos(item.nomeDoProduto); // Filtra a lista de produtos com base na seleção
          }}
          containerStyle={style.dropDownContainerStyle}
        />
      </View>
      <View style={style.ViewFlatlist}>
        <FlatList
          data={produtosFiltrados.slice(0, 3)} //Mostra apenas os três primeiros produtos
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => renderOption(item)}
        />
      </View>
    </View>
  );
}

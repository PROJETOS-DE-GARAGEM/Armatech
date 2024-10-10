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
  const [erro, setErro] = useState(""); //Armazena possíveis erros ao carregar ou filtrar produtos

  useEffect(() => {
    //Função para buscar prosdutos ao carregar a tela do estoque
    async function carregarProdutos() {
      try {
        const produtoService = new ProdutoService();
        const produtoListados = await produtoService.ListarProdutos(); //Buscar os produtos da API
        setProdutos([
          { id: 0, nomeDoProduto: "Todos os Produtos" },
          ...produtoListados,
        ]); // Adiciona a opção "Todos os Produtos"
        setProdutosFiltrados(produtoListados); //Inicia exibindo todos os produtos mas poderá ao pesquisar um produto especifico
      } catch (error) {
        setErro("Erro ao carregar produtos");
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
          <TouchableOpacity onPress={()=> abrirModalEdicao(item)}>
            <FontAwesome name="edit" size={30} color="#32bc9b" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  //Função para filtrar os produtos com base na seleção do dropdown
  //Terá que ser tratado no beck end
  const filtrarProdutos = (produtoSelecionado) => {
    if (!produtoSelecionado || produtoSelecionado === "Todos os Produtos") {
      setProdutosFiltrados(produtos.filter((produto) => produto.id !== 0)); // Mostra todos os produtos, exceto a opção "Todos os Produtos"
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
          <Text style={style.textButton}>Adicionar</Text>
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

      {/* Exibe erro caso exista */}
      {erro ? <Text style={style.errorText}>{erro}</Text> : null}

      <View style={style.ViewFlatlist}>
        <FlatList
          data={produtosFiltrados} //Mostra apenas os três primeiros produtos
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => renderOption(item)}
        />
      </View>
    </View>
  );
}

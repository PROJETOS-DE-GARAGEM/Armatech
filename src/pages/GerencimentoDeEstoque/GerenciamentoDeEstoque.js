import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native"; // Importando useFocusEffect
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Dropdown } from "react-native-element-dropdown";

import style from "./GerenciamentoDeEstoqueStyle";
import Header from "../../components/Header/Header";
import { ProdutoService } from "../../../service/CasdastrarProdutos";
import ModalEditarProduto from "../../components/ModalEditarProduto/ModalEditarProduto";

export default function GerenciamentoDeEstoque({ navigation }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null); //Irá armazenar o produto selecionado
  const [produtos, setProdutos] = useState([]); // Irá armazenar a lista de produtos que será carregada da API
  const [produtosFiltrados, setProdutosFiltrados] = useState([]); //Irá armazenar os produtos que serão exibidos na tela após a aplicação de um filtro
  const [produtoEditado, setprodutoEditado] = useState(null); //Produto a ser editado
  const [modalVisible, setModalVisible] = useState(false); //controle do modal
  const [erro, setErro] = useState(""); //Armazena possíveis erros ao carregar ou filtrar produtos

  const produtoService = new ProdutoService();

  //Função para buscar prosdutos ao carregar a tela do estoque
  async function carregarProdutos() {
    try {
      //const produtoService = new ProdutoService();
      const produtoListados = await produtoService.listarProdutos(); //Buscar os produtos da API
      setProdutos([{ id: 0, nome: "Todos os Produtos" }, ...produtoListados]); // Adiciona a opção "Todos os Produtos"
      setProdutosFiltrados(produtoListados); //Inicia exibindo todos os produtos mas poderá ao pesquisar um produto especifico
    } catch (error) {
      setErro("Erro ao carregar produtos");
      console.error("Erro ao carregar produtos: ", error);
    }
  }

  // Usando useFocusEffect para recarregar os dados sempre que a tela for aberta
  useFocusEffect(
    React.useCallback(() => {
      carregarProdutos(); // Recarrega os produtos sempre que a tela for exibida
    }, []) // O array vazio garante que a função seja chamada apenas quando a tela ganhar o foco
  );

  useEffect(() => {
    carregarProdutos();
  }, []); // O [] vazio indica que essa função séra executada apenas uma vez

  // Abrir o modal de edição ao clicar no ícone de edição
  const abrirModalEdicao = (produto) => {
    //produto.preco.toString();
    console.log("produto selecionado: ", produto);
    setprodutoEditado(produto); // Define o produto a ser editado
    setModalVisible(true); // Exibe o modal
  };

  // Salvar as edições feitas no modal
  const salvarEdicao = async () => {
    try {
      await produtoService.editarProduto(produtoEditado.id, produtoEditado); // Chama o serviço para editar o produto
      setModalVisible(false); // Fecha o modal após salvar // Atualiza a lista de produtos após a edição
      setProdutos(
        (
          produtos // Atualiza a lista de produtos após a edição
        ) =>
          produtos.map((p) => (p.id === produtoEditado.id ? produtoEditado : p))
      );
      Alert.alert("Sucesso", "Produto atualizado com sucesso!");
      carregarProdutos();
    } catch (error) {
      console.error("Erro ao salvar edição:", error);
    }
  };

  // Atualiza o produto no estado conforme o usuário edita os campos no modal
  const atualizarProduto = (campo, valor) => {
    setprodutoEditado({
      ...produtoEditado,
      [campo]: valor,
    });
  };

  // Função para confirmar a exclusão do produto
  const confirmarExclusao = (id) => {
    Alert.alert(
      "Excluir Produto",
      "Tem certeza que deseja excluir este produto?",
      [
        {
          text: "Sim",
          onPress: () => excluirProduto(id), // Chama a função para excluir
        },
        { text: "Cancelar", style: "cancel" }, // Coloque "Cancelar" depois de "Sim"
      ],
      { cancelable: false }
    );
  };

  // Função para excluir o produto
  const excluirProduto = async (id) => {
    try {
      await produtoService.deletarProduto(id); // Chama o serviço para deletar o produto
      setProdutos(produtos.filter((produto) => produto.id !== id)); // Remove o produto do banco de dado
      Alert.alert("Sucesso", "Produto excluído com sucesso!");
      carregarProdutos();
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      Alert.alert("Erro", "Ocorreu um erro ao excluir o produto.");
    }
  };

  //Função para renderizar cada produto
  function renderOption(item) {
    return (
      <View style={style.boxListContainer}>
        <View style={style.boxListEstoque}>
          <Text style={style.nameList}>{item.nome}</Text>
          <Text style={style.detailsList}>Descrição: {item.descricao}</Text>
          <Text style={style.detailsList}>Tamanho: {item.tamanho}</Text>
          <Text style={style.detailsList}>
            Preço: R${item.preco.toFixed(2)}
          </Text>
          <Text style={style.detailsList}>
            Estoque Disponível: {item.quantidade} Unidades
          </Text>
        </View>

        <View style={style.boxIconStyle}>
          <TouchableOpacity onPress={() => confirmarExclusao(item.id)}>
            <Ionicons name="trash" size={30} color="#ff784b" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => abrirModalEdicao(item)}>
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
        return produto.nome
          ? produto.nome
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
          labelField="nome"
          valueField="nome"
          placeholder="Selecione o Produto..."
          searchPlaceholder="Buscar..."
          value={produtoSelecionado}
          onChange={(item) => {
            setProdutoSelecionado(item.nome); // Atualiza o estado com o produto selecionado
            filtrarProdutos(item.nome); // Filtra a lista de produtos com base na seleção
          }}
          containerStyle={style.dropDownContainerStyle}
        />
      </View>

      {/* Exibe erro caso exista */}
      {erro ? <Text style={style.errorText}>{erro}</Text> : null}
        <View style={style.ViewFlatlist}>
          <FlatList
            data={produtosFiltrados}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => renderOption(item)}
          />
        </View>

      {/* Modal de edição */}
      <ModalEditarProduto
        produtoEditado={produtoEditado}
        atualizarProduto={atualizarProduto}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        salvarEdicao={salvarEdicao}
      />
    </View>
  );
}

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Header from "../../components/Header/Header";
import style from "./../RegistroDeProdutos/RegistroDeProdutosStyle";
import { ProdutoService } from "../../../service/CasdastrarProdutos";

export default function RegistroDeProdutos({ navigation }) {
  //Criando os estados
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [tipo, setTipo] = useState(null);

  //Estados para o controle de habilitação e desabilitação dos seletores
  const [isSizeDisable, setSizeDisable] = useState(false);
  const [isSizeNumberEnable, setSizeNumberEnable] = useState(false);

  //Listas de objetos para colocar nas opções dos seletores
  const data = [
    { label: "LETRA", value: 0 },
    { label: "NUMERICO", value: 1 },
  ];

  const tamanhos = [
    { label: "PP", value: "PP" },
    { label: "P", value: "P" },
    { label: "M", value: "M" },
    { label: "G", value: "G" },
    { label: "GG", value: "GG" },
    { label: "36/38", value: "36/38"},
    { label: "38/40", value: "38/40"},
    { label: "40/42", value: "40/42"},
    { label: "42/44", value: "42/44"},
    { label: "44/46", value: "44/46"},
  ];

  //Funções para setar o valor digitado dentro do estado "set"
  function changeName(name) {
    setName(name);
  }
  function changeDescription(description) {
    setDescription(description);
  }
  function changePrice(price) {
    let priceFormatted = price.replace(",", ".")
    setPrice(priceFormatted)
  }
  function changeAmount(amount) {
    setAmount(amount);
  }
  service = new ProdutoService()
  //Se os campos não forem preenchidos, informar ao usuário.
  function register() {
    if (!name || !description || !price || !amount || !tamanho || tipo === null) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    //Cria o objeto produtos com os dados do usuário.
    const novoProduto = {
      nome: name,
      descricao: description,
      preco: price,
      quantidade: amount,
      tamanho: tamanho,
      tipo: tipo,
    };


    //Chama a função de service para cadastrar o produto

    service.cadastrar(novoProduto)
      .then(() => {
        //Mostra um alerta de sucesso
        Alert.alert("Produto cadastrado com sucesso!");

        //Limpa os campos após o cadastro bem-sucedido
        setName("");
        setDescription("");
        setPrice("");
        setAmount("");
        setTamanho("");
        setTipo("");
      })
      .catch((error) => {
        Alert.alert("Erro ao cadastrar o produto:", error.message); // Mostra um alerta em caso de erro
      });
  }

  //Chama a função após clicar no botão "limpar".
  function clear() {
    setName("");
    setDescription("");
    setPrice("");
    setAmount("");
    setTamanho("");
    setTipo("");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === "ios" ? "padding" : "heigth"} //Ajuste para o teclado não ficar sobre os formulários
        keyboardVerticalOffset={60}
      >

        <Header titulo="Registro de Produtos" navigation={navigation} />
        <ScrollView
          contentContainerStyle={style.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={style.Title}>Adicionar novo Produto</Text>

          <View style={style.boxContainer}>
            <View style={style.boxDescription}>
              <Text style={style.text}>Tipo de Tamanho</Text>
              <Dropdown
                style={style.dropdown}
                placeholderStyle={style.placeholderStyle}
                selectedTextStyle={style.selectedTextStyle}
                inputSearchStyle={style.inputSearchStyle}
                iconStyle={style.iconStyle}
                data={data} // Definindo a variável de dados
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Tipo de Produto..."
                value={tipo}
                onChange={(item) => {
                  setTipo(item.value);
                  // Se o item 2 "Calça" for selecionado, ele passa para a varável de estado, disponibiliza o input "selecione o número".
                  setSizeNumberEnable(item.value === 1);
                  setSizeDisable(item.value === 1);
                }}
                containerStyle={style.dropDownContainerStyle}
              />
            </View>

            <View style={style.boxDescription}>
              <Text style={style.text}>Nome do Produto</Text>
              <TextInput
                style={style.Input}
                placeholder="Nome do Produto"
                placeholderTextColor="gray"
                onChangeText={(Input) => changeName(Input)}
                value={name}
              ></TextInput>
            </View>

            <View style={style.boxDescription}>
              <Text style={style.text}>Descrição</Text>
              <TextInput
                style={style.Input}
                placeholder="Descrição"
                placeholderTextColor="gray"
                onChangeText={(Input) => changeDescription(Input)} //Transferindo valor digitado para a variável de estado
                value={description}
              ></TextInput>
            </View>

            {!isSizeDisable && (
              //
              <View style={style.boxDescription}>
                <Text style={style.text}>Tamanho</Text>
                <Dropdown
                  style={style.dropdown}
                  placeholderStyle={style.placeholderStyle}
                  selectedTextStyle={style.selectedTextStyle}
                  inputSearchStyle={style.inputSearchStyle}
                  iconStyle={style.iconStyle}
                  data={tamanhos} // Definindo a variável de dados
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Selecione o Tamanho..."
                  value={tamanho}
                  onChange={(item) => {
                    setTamanho(item.value);
                  }}
                  disable={isSizeDisable} //Desabilitando a funcionalidade caso SizeDisable seja true.
                  containerStyle={style.dropDownContainerStyle}
                />
              </View>
            )}

            {isSizeNumberEnable && (
              <View style={style.boxDescription}>
                <Text style={style.text}>Tamanho</Text>
                <Dropdown
                  style={style.dropdown}
                  placeholderStyle={style.placeholderStyle}
                  selectedTextStyle={style.selectedTextStyle}
                  inputSearchStyle={style.inputSearchStyle}
                  iconStyle={style.iconStyle}
                  data={tamanhos} // Definindo a variável de dados
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Selecione o Número..."
                  value={tamanho}
                  onChange={(item) => {
                    setTamanho(item.value);
                  }}
                  containerStyle={style.dropDownContainerStyle}
                />
              </View>
            )}

            <View style={style.boxDescription}>
              <Text style={style.text}>Preço</Text>
              <TextInput
                keyboardType="numeric"
                style={style.Input}
                placeholder="R$"
                placeholderTextColor="gray"
                onChangeText={changePrice}
                value={price}
              ></TextInput>
            </View>

            <View style={style.boxDescription}>
              <Text style={style.text}>Quantidade</Text>
              <TextInput
                keyboardType="numeric"
                style={style.Input}
                placeholder="Unidades"
                placeholderTextColor="gray"
                onChangeText={changeAmount}
                value={amount}
              ></TextInput>
            </View>
          </View>

          <View style={style.btnBox}>
            <TouchableOpacity
              onPress={() => register()}
              style={[style.btn, { backgroundColor: "#32bc9b" }]}
            >
              <View style={style.btnArea}>
                <Text style={style.btnText}>Salvar</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => clear()}
              style={[style.btn, { backgroundColor: "#ff784b" }]}>
              <View style={style.btnArea}>
                <Text style={style.btnText}>Limpar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

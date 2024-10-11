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
  const [size, setSize] = useState("");
  const [sizeNumber, setSizeNumber] = useState("");
  const [type, setType] = useState("");

  //Estados para o controle de habilitação e desabilitação dos seletores
  const [isSizeDisable, setSizeDisable] = useState(false);
  const [isSizeNumberEnable, setSizeNumberEnable] = useState(false);

  //Listas de objetos para colocar nas opções dos seletores
  const tipo = [
    { label: "Short/Saia", value: "1" },
    { label: "Calça", value: "2" },
  ];

  const data = [
    { label: "PP", value: "1" },
    { label: "P", value: "2" },
    { label: "M", value: "3" },
    { label: "G", value: "4" },
    { label: "GG", value: "5" },
  ];

  const numeracao = [
    { label: "36/38", value: "1" },
    { label: "38/40", value: "2" },
    { label: "40/42", value: "3" },
    { label: "42/44", value: "4" },
    { label: "44/46", value: "5" },
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
    if (!name || !description || !price || !amount || !(size || sizeNumber) || !type) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    //Cria o objeto produtos com os dados do usuário.
    const novoProduto = {
      nomeDoProduto: name,
      descricao: description,
      preco: price,
      quantidade: amount,
      tamanho: size || sizeNumber,
      tipo: type,
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
        setSize("");
        setType("");
        setSizeNumber("");
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
    setSize("");
    setType("");
    setSizeNumber("");
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
              <Text style={style.text}>Tipo de Produto</Text>
              <Dropdown
                style={style.dropdown}
                placeholderStyle={style.placeholderStyle}
                selectedTextStyle={style.selectedTextStyle}
                inputSearchStyle={style.inputSearchStyle}
                iconStyle={style.iconStyle}
                data={tipo} // Definindo a variável de dados
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Tipo de Produto..."
                value={type}
                onChange={(item) => {
                  setType(item.value);
                  // Se o item 2 "Calça" for selecionado, ele passa para a varável de estado, disponibiliza o input "selecione o número".
                  setSizeNumberEnable(item.value === "2");
                  setSizeDisable(item.value === "2");
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
                  data={data} // Definindo a variável de dados
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Selecione o Tamanho..."
                  value={size}
                  onChange={(item) => {
                    setSize(item.value);
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
                  data={numeracao} // Definindo a variável de dados
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Selecione o Número..."
                  value={sizeNumber}
                  onChange={(item) => {
                    setSizeNumber(item.value);
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

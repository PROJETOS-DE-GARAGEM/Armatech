import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
} from "react-native";
import axios from "axios";
import styles from "./IntegracaoDeVendasStyle";
import Header from "../../components/Header/Header";
import { Dropdown } from "react-native-element-dropdown";
import { ProdutoService } from "../../../service/CasdastrarProdutos";
import DatePicker from "../../components/DateTimePicker";

export default function IntegracaoDeVendas({ navigation }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [quantidade, setQuantidade] = useState(0);
  const [quantidadeSolicitada, setQuantidadeSolicitada] = useState(0);
  const [estoqueAtual, setEstoqueAtual] = useState(0);
  const [tamanho, setTamanho] = useState("");
  const [precoTotal, setPrecoTotal] = useState(0);
  const [produtos, setProdutos] = useState([]);
  const [date, setDate] = useState("");
  const [tipoLancamento, setTipoLancamento] = useState(null);

  const [isTipoLancamentoDisabled, setIsTipoLancamentoDisabled] =
    useState(false);
  const [isSearchEnable, setSearchEnable] = useState(false);
  const [isLaunchEnable, setLaunchEnable] = useState(false);

  const service = new ProdutoService(); // Insancia o serviço para buscar produtos
  //TO DO: REFATORAR A FUNÇÃO PARA SYNC E AWAIT
  // useEffect para carregar os produtos assim que os produtos é motado
  useEffect(() => {
    service
      .listarProdutos()
      .then((response) => {
        //Função para busca os produtos no servidor
        setProdutos(response); // Salva os produtos retornados no estado 'produtos
        setEstoqueAtual(response.quantidade);
      })
      .catch((error) => {
        Alert.alert("Erro ao carregar os produtos", error.message);
      }); //Caso ocorra erro, exibe o alerta
  }, []); // Indica que o useEffect será executado apenas uma vez

  // 3.Função para calcular o preço total com base na quantidade e no produto selecionado
  function calcularPrecoTotal(quantidade) {
    if (produtoSelecionado) {
      const quantidadeNumerica = parseFloat(quantidade); // Converte a quantidade de string para número
      if (!isNaN(quantidadeNumerica)) {
        const total = produtoSelecionado.preco * quantidadeNumerica; // Multiplica o preço pela quantidade
        setPrecoTotal(total); // Atualiza o estado do preço total
      } else {
        setPrecoTotal(0); // Se a quantidade não for válida, zera o preço total
      }
    }
  }

  function validarQuantidadeEstoque() {
    const quantidadeSelecionada = parseFloat(quantidade);
    if (quantidadeSelecionada > produtoSelecionado.quantidade) {
      Alert.alert(`Erro,Estoque diposnivel: ${quantidade} `);
      return false; //Retorna falso se a quantidade for maior que o estoque
    }
    return true; //Caso contrário, a quantidade é válida
  }

  // Função para salvar a transação e limpar os campos após o salvamento
  function salvarTransacao() {
    if (!produtoSelecionado || !quantidade || !tamanho) {
      Alert.alert("Por favor, preencha todos os campos"); //Valida se todos os campos estão preenchidos
      return;
    }

    // Verifica se a quantidade é maior que o estoque disponível
    if (!validarQuantidadeEstoque(quantidade)) {
      return;
    }

    // Objeto que representa a transação realizada
    const transacao = {
      produto: produtoSelecionado.nomeDoProduto,
      tamanho: tamanho,
      quantidade: quantidade,
      data: date,
      precoTotal: precoTotal,
    };

    // Envio da transação para o JSON Server
    axios
      .post("http://192.168.100.28:3000/vendas", transacao)
      .then((response) => {
        console.log("Transação salva:", response.data);
        Alert.alert("Venda realizada com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao salvar a transação:", error);
      });

    //Limpar os campos após salvar
    setProdutoSelecionado(null);
    setTamanho("");
    setQuantidade("");
    setDate("");
    setPrecoTotal(0);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header titulo="Lançamentos" navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.ViewTipoLancamento}>
            <Text style={styles.text}>Tipo Lançamento: </Text>
            {/* Dropdown */}
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              containerStyle={styles.dropDownContainerStyle}
              data={[
                { label: "Adicionar Estoque", value: 1 },
                { label: "Lançamento de Venda", value: 2 },
              ]}
              maxHeight={300}
              labelField="label" //Campo do nome do produto
              valueField="value" //Identificador do produto
              placeholder="Lançamento..."
              value={tipoLancamento} // Valor selecionado
              onChange={(item) => {
                setTipoLancamento(item.value);
                console.log("Tipo de Lançamento selecionado:", item.value);
                setIsTipoLancamentoDisabled(true);
                setSearchEnable(item.value === 2);
                setLaunchEnable(item.value === 1);
              }}
            />
          </View>
          {isSearchEnable && tipoLancamento === 2 && (
            <View>
              <Text style={styles.text}>Pesquisar Produto: </Text>
              {/* Dropdown */}
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                containerStyle={styles.dropDownContainerStyle}
                iconStyle={styles.iconStyle}
                data={produtos} // Dados carregados dos produtos
                search
                maxHeight={300}
                labelField="nomeDoProduto" //Campo do nome do produto
                valueField="id" //Identificador do produto
                placeholder="Selecione o Produto..."
                searchPlaceholder="Buscar..."
                value={produtoSelecionado ? produtoSelecionado.id : null} // Valor selecionado
                onChange={(item) => {
                  setProdutoSelecionado(item); //Atualiza o produto selecionado
                  calcularPrecoTotal(quantidade); // Recalcula o preço total se a quantidade já foi informada
                }}
              />
            </View>
          )}

          {tipoLancamento === 2 && produtoSelecionado && (
            <View style={styles.centerContainer}>
              <View style={styles.boxSell}>
                {/* Exibe o nome do produto, preço e estoque disponível */}
                <Text style={styles.textSell}>
                  Nome do Produto: {produtoSelecionado.nomeDoProduto}{" "}
                </Text>
                <Text style={styles.textSell}>
                  Preço: R${produtoSelecionado.preco}{" "}
                </Text>
                <Text style={styles.textSell}>
                  Estoque disponivel: {produtoSelecionado.quantidade}
                </Text>

                {/*Campo para inserir a quantidade  */}
                <View>
                  <Text style={styles.textSell}>Quantidade Vendida: </Text>
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="0"
                    placeholderTextColor="#ccc"
                    value={quantidade} //Valor da quantidade
                    onChangeText={(value) => {
                      setQuantidade(value); //Atualiza a quantidade no estado
                      calcularPrecoTotal(value); //Recalcula preço total e altera a quantidade
                    }}
                    style={styles.quantidadeInput}
                  />
                  {/* DatePicker */}
                  <View>
                    <Text style={styles.textAdd}>Data da Venda:</Text>
                    <DatePicker
                      data={Date}
                      onDateChange={(selectedDate) => setDate(selectedDate)}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.boxTransaction}>
                <Text style={styles.textTrasanction}>
                  Resumo da transação:{" "}
                </Text>
                {/* Exibe o resumo dos detalhes da transação */}
                <Text style={styles.textSell}>
                  Produto: {produtoSelecionado.nomeDoProduto}{" "}
                </Text>
                <Text style={styles.textSell}>Tamanho: {tamanho} </Text>
                <Text style={styles.textSell}>Quantidade: {quantidade} </Text>
                <Text style={styles.textSell}>Data da Venda: {date} </Text>
                <Text style={styles.textSell}>
                  Preço Total: R$ {precoTotal}{" "}
                </Text>
              </View>
              <View style={styles.BoxButton}>
                <TouchableOpacity
                  onPress={salvarTransacao}
                  style={styles.saveButton}
                >
                  <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    // Limpa os campos se o usuário clicar em cancelar
                    setProdutoSelecionado(null);
                    setQuantidade("");
                    setTamanho("");
                    setPrecoTotal(0);
                    setTipoLancamento("");
                    setSearchEnable(false);
                  }}
                  style={styles.cancelButton}
                >
                  <Text style={styles.buttonText}>Limpar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {tipoLancamento === 1 && (
            <View>
              <View>
                <Text style={styles.text}>Selecione o Produto: </Text>
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  containerStyle={styles.dropDownContainerStyle}
                  iconStyle={styles.iconStyle}
                  data={produtos} // Dados carregados dos produtos
                  search
                  maxHeight={300}
                  labelField="nomeDoProduto" //Campo do nome do produto
                  valueField="id" //Identificador do produto
                  placeholder="Selecione o Produto..."
                  searchPlaceholder="Buscar..."
                  value={produtoSelecionado ? produtoSelecionado.id : null} // Valor selecionado
                  onChange={(item) => {
                    setProdutoSelecionado(item); //Atualiza o produto selecionado
                  }}
                />
              </View>

              <View style={styles.containerTransacionAdd}>
                <View style={styles.boxTransactionAdd}>
                  <Text style={[styles.textTrasanction, { marginBottom: 30 }]}>
                    Integração de Estoque:{" "}
                  </Text>
                  <View style={styles.boxDescription}>
                    <Text style={styles.textAdd}>Nome do Produto:</Text>
                    <TextInput
                      style={styles.quantidadeInput}
                      placeholder="Nome do Produto"
                      //onChangeText={(Input) => changeName(Input)}
                      value={
                        produtoSelecionado
                          ? produtoSelecionado.nomeDoProduto
                          : "Nenhum produto selecionado"
                      }
                      editable={false}
                    />
                  </View>

                  <View>
                    <Text style={styles.textAdd}>Tamanho:</Text>
                    <TextInput
                      style={styles.quantidadeInput}
                      value={
                        tamanho ? tamanho.tamanho : "Nenhum tamanho selecionado"
                      }
                      editable={false}
                    />
                  </View>

                  <View style={[styles.boxDescription, { marginTop: 10 }]}>
                    <Text style={styles.textAdd}>Quantidade:</Text>
                    <TextInput
                      style={styles.quantidadeInput}
                      keyboardType="number-pad"
                      placeholder="0"
                      placeholderTextColor="#ccc"
                      onChangeText={(value) => setQuantidadeSolicitada(value)}
                      value={quantidadeSolicitada}
                    />
                  </View>
                </View>

                <View style={styles.BoxButtonAdd}>
                  <TouchableOpacity
                    //onPress={adicionarEstoqueProduto}
                    style={styles.saveButton}
                  >
                    <Text style={styles.buttonText}>Salvar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      // Limpa os campos se o usuário clicar em cancelar
                      setProdutoSelecionado(null);
                      setQuantidade("");
                      setTamanho("");
                      setPrecoTotal(0);
                      setTipoLancamento("");
                      setSearchEnable(false);
                    }}
                    style={styles.cancelButton}
                  >
                    <Text style={styles.buttonText}>Limpar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

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
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./IntegracaoDeVendasStyle";
import Header from "../../components/Header/Header";
import { Dropdown } from "react-native-element-dropdown";
import { ProdutoService } from "../../../service/CasdastrarProdutos";
import DatePicker from "../../components/DateTimePicker";
import { LancamentoService } from "../../../service/LancamentoService";
import moment from "moment";

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
  const [reload, setReload] = useState(false);

  // Estados para o controle dos seletores
  const [isTipoLancamentoDisabled, setIsTipoLancamentoDisabled] =
    useState(false);
  const [isSearchEnable, setSearchEnable] = useState(false);
  const [isLaunchEnable, setLaunchEnable] = useState(false);

  const service = new ProdutoService(); // Insancia o serviço para buscar produtos
  const lancamentoService = new LancamentoService(); // Insancia o serviço realizar os lançamentos

  // useEffect para carregar os produtos assim que os produtos é motado
  useEffect(() => {
    service
      .listarProdutos() //Função para busca os produtos no servidor
      .then((response) => {
        if (response) {
          response = response.map((produto) => {
            produto.nomeTamanho = `${produto.nome} (${produto.tamanho}) (${produto.descricao})`;
            return produto;
          });
        }
        setProdutos(response); // Salva os produtos retornados no estado produtos
        setEstoqueAtual(response.quantidade);
      })
      .catch((error) => {
        Alert.alert("Erro ao carregar os produtos", error.message);
      }); //Caso ocorra erro, exibe o alerta
  }, [reload]); // Indica que o useEffect será executado apenas uma vez

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
      Alert.alert(`Erro, Estoque diposnivel: ${produtoSelecionado.quantidade} unidades.`);
      return false; //Retorna falso se a quantidade for maior que o estoque
    }
    return true; //Caso contrário, a quantidade é válida
  }

  // Função para salvar a transação e limpar os campos após o salvamento
  function salvarTransacao() {
    // Verificação se todos os campos estão preenchidos corretamente de acordo com o tipo de lançamento
    if (!produtoSelecionado) {
      Alert.alert("Por favor, selecione um produto.");
      return;
    }
    if (tipoLancamento === 1 && !quantidade) {
      Alert.alert("Por favor, informe a quantidade vendida.");
      return;
    }
    if (tipoLancamento === 0 && !quantidadeSolicitada) {
      Alert.alert("Por favor, informe a quantidade que deseja adicionar.");
      return;
    }
    if (tipoLancamento === 0 && !date || tipoLancamento === 1 && !date) {
      Alert.alert("Por favor, selecione uma data.");
      return;
    }
    // Verifica se a quantidade é maior que o estoque disponível somente para lançamentos de venda
    if (tipoLancamento === 1 && !validarQuantidadeEstoque(quantidade)) {
      return;
    }

    // Conversão do dado de moment para timestamp
    let partes = date.split("/"); //DD MM YYYY  [DD, MM , YYYY]
    let dataTimeStamp = new Date(`${partes[2]}-${partes[1]}-${partes[0]}`);
    dataTimeStamp = moment(dataTimeStamp);

    // Objeto que representa a transação de venda
    let lancamento = {
      tipo: tipoLancamento,
      produto: {
        nome: produtoSelecionado.nome,
        id: produtoSelecionado.id,
      },
      quantidade: parseFloat(quantidade),
      dataSaida: null, // Recebe o valor de date se o tipo for "1" saída
      dataEntrada: null, // Recebe o valor de date se o tipo for "0" entrada
    };

    // Condicional para idenficar qual o tipo da transação ao salvar os dados nas variáveis(entrada ou saída)
    if (tipoLancamento === 1) {
      lancamento.dataSaida = dataTimeStamp.format("YYYY-MM-DD");
    } else if (tipoLancamento === 0) {
      lancamento.dataEntrada = dataTimeStamp.format("YYYY-MM-DD");
      lancamento.quantidade = quantidadeSolicitada;
    }

    // Envio da transação para o JSON Server
    lancamentoService
      .cadastrar(lancamento)
      .then(() => {
        //Mostra um alerta de sucesso
        Alert.alert("Lançamento registrado com sucesso!");

        //Limpar os campos após salvar   map , filter , find  , reduce
        setProdutoSelecionado(null);
        setTamanho("");
        setQuantidade("");
        setDate("");
        setPrecoTotal(0);
        setTipoLancamento(null);
        // Atualizar o estado 'reload' para recarregar os dados
        setReload((prev) => !prev); // Alterna entre true e false
      })
      .catch((error) => {
        Alert.alert(
          "Erro ao registrar a venda:",
          error.response ? error.response.data : error.message
        ); // Mostra um alerta em caso de erro
      });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "heigth"} //Ajuste para o teclado não ficar sobre os formulários
        keyboardVerticalOffset={75}
        >
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
                { label: "Adicionar Estoque", value: 0 },
                { label: "Lançamento de Venda", value: 1 },
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
                setSearchEnable(item.value === 1);
                setLaunchEnable(item.value === 0);
              }}
            />
          </View>
          {isSearchEnable && tipoLancamento === 1 && (
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
                labelField="nomeTamanho" //Campo do nome do produto
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

          {tipoLancamento === 1 && produtoSelecionado && (
            <View style={styles.centerContainer}>
              <View style={styles.boxSell}>
                {/* Exibe o nome do produto, preço e estoque disponível */}
                <Text style={styles.textSell}>
                  Nome do Produto: {produtoSelecionado.nome}{" "}
                </Text>
                <Text style={styles.textSell}>
                  Descrição: {produtoSelecionado.descricao}{" "}
                </Text>
                <Text style={styles.textSell}>
                  Preço: R$ {produtoSelecionado.preco?.toFixed(2)}{" "}
                </Text>
                <Text style={styles.textSell}>
                  Estoque disponivel: {produtoSelecionado.quantidade} Unidades
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
                  Produto: {produtoSelecionado.nome}{" "}
                </Text>
                <Text style={styles.textSell}>
                  Descrição: {produtoSelecionado.descricao}{" "}
                </Text>
                <Text style={styles.textSell}>
                  Tamanho: {produtoSelecionado.tamanho}{" "}
                </Text>
                <Text style={styles.textSell}>
                  Vendido: {quantidade} Unidades{" "}
                </Text>
                <Text style={styles.textSell}>Data da Venda: {date} </Text>
                <Text style={styles.textSell}>
                  Preço Total: R$ {precoTotal?.toFixed(2)}{" "}
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

          {tipoLancamento === 0 && (
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
                  labelField="nomeTamanho" //Campo do nome do produto
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
                      value={
                        produtoSelecionado
                          ? produtoSelecionado.nome
                          : "Nenhum produto selecionado"
                      }
                      editable={false}
                    />
                  </View>

                  <View>
                    <Text style={styles.textAdd}>Descrição:</Text>
                    <TextInput
                      style={styles.quantidadeInput}
                      value={
                        produtoSelecionado ? produtoSelecionado.descricao : "Nenhum tamanho selecionado"
                      }
                      editable={false}
                    />
                  </View>

                  <View>
                    <Text style={styles.textAdd}>Tamanho:</Text>
                    <TextInput
                      style={styles.quantidadeInput}
                      value={
                        produtoSelecionado
                          ? produtoSelecionado.tamanho
                          : "Nenhum tamanho selecionado"
                      }
                      editable={false}
                    />
                  </View>

                  <View>
                    <Text style={styles.textAdd}>Data da Entrada:</Text>
                    <DatePicker
                      data={Date}
                      onDateChange={(selectedDate) => setDate(selectedDate)}
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
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

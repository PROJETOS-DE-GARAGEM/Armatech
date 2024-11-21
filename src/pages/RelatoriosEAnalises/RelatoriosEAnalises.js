import React, { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import style from "./RelatoriosEAnalisesStyle";
import Header from "../../components/Header/Header";
import DateRelatorio from "../../components/DateRelatorio/DateRelatorio";
import { ProdutoService } from "../../../service/CasdastrarProdutos";
import { LancamentoService } from "../../../service/LancamentoService";
import { parse, format, setHours, setMinutes, setSeconds } from 'date-fns';


// Função para formatar datas
const formatDate = (dateString) => {
  if (!dateString) return "Data indisponível";
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
};

export default function RelatoriosEAnalises({ navigation }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dados, setDados] = useState([]);

  const produtoService = new ProdutoService();
  const lancamentoService = new LancamentoService();

  // Função para buscar dados de produtos e lançamentos
  const filtrarLacamento = async (startDate, endDate) => {
    console.log(
      `Filtrar Lançamento chamado: data inicial: ${startDate} data final: ${endDate}`
    );
    //Valida se as datas estao definidas
    if (!startDate || !endDate) {
      console.warn("Datas não definidas. Selecione uma data inicial e final.");
      return;
    }

    try {
      // Converte as datas para o formato esperado pelo backend
      const dataComeco = format(
        parse(startDate, 'dd/MM/yyyy', new Date()), // Parse do formato "dd/MM/yyyy"
        'yyyy-MM-dd HH:mm:ss' // Formato esperado pelo backend
      );
      
      // Converte a data final e ajusta o horário para 23:59:59
      const parsedEndDate = parse(endDate, 'dd/MM/yyyy', new Date()); // Parse do formato "dd/MM/yyyy"
      const dataFimISO = setSeconds(setMinutes(setHours(parsedEndDate, 23), 59), 59); // Ajusta para 23:59:59
      const dataFim = format(dataFimISO, 'yyyy-MM-dd HH:mm:ss'); // Formata para o backend

      console.log(`Dados formatados para o backend:`);
      console.log(`  Data Início: ${dataComeco}`);
      console.log(`  Data Fim: ${dataFim}`);

      //Busca os produtos para mapeamento posterior
      const produtosResponse = await produtoService.listarProdutos();

      //Busca os lancamentos com filtro de datas
      const lancamentosResponse = await lancamentoService.listarLancamento(
        dataComeco,
        dataFim
      );

      //Verifiar se ha lancamentos no periodo
      if (!lancamentosResponse || lancamentosResponse.length === 0) {
        Alert.alert(
          "Nenhuma informação encontrada para o período selecionado."
        );
        console.log("Nenhuma informação encontrada para o período selecionado");
        setDados([]); //Limpa os dados exibidos
        return;
      }

      // Mapear produtos por ID
      const produtosMap = {};
      produtosResponse.forEach((produto) => {
        produtosMap[produto.id] = produto;
      });

      // Enriquecer lançamentos com dados do produto
      const lancamentosComDetalhes = lancamentosResponse.map((lancamento) => {
        const produtoDetalhado = produtosMap[lancamento.produto.id];
        return {
          ...lancamento,
          produto: produtoDetalhado,
        };
      });

      //Atualiza o estado com os dados enriquecidos
      setDados(lancamentosComDetalhes);

      //Console para verificar os dados que esta sendo filtrado
      console.log(`--------------------------------------------`);
      lancamentosComDetalhes.forEach((lancamento, index) => {
        console.log(`Lançamento ${index + 1}:`);
        console.log(`  Tipo: ${lancamento.tipo}`); // Entrada ou Saída
        console.log(`  Produto: ${lancamento.produto?.nome || "Desconhecido"}`);
        console.log(`  Quantidade: ${lancamento.quantidade}`);
        console.log(
          `  Data: ${
            lancamento.tipo === "ENTRADA"
              ? formatDate(lancamento.dataEntrada)
              : formatDate(lancamento.dataSaida)
          }`
        );
        console.log(
          `  Valor Unitário: R$ ${
            lancamento.produto?.preco?.toFixed(2) || "0.00"
          }`
        );
        console.log(`--------------------------------------------`);
      });
    } catch (error) {
      console.log("Erro ao buscar dados:", error);
    }
  };

  // Filtrar lançamentos para entradas e saídas
  const entradas = dados.filter((item) => item.tipo === "ENTRADA");
  const saidas = dados.filter((item) => item.tipo === "SAIDA");

  // Calcula o total de entradas, saídas e faturamento
  const totalEntradas = entradas.reduce(
    (acc, item) => acc + item.quantidade,
    0
  );
  const totalSaidas = saidas.reduce((acc, item) => acc + item.quantidade, 0);
  const totalFaturamento = saidas
    .reduce(
      (acc, item) => acc + item.quantidade * (item.produto?.preco || 0),
      0
    )
    .toFixed(2);

  return (
    <View style={style.container}>
      <Header titulo="Relatórios e Análises" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.contentResume}>
          <Text style={style.dateText}>Período</Text>
          <View>
            <DateRelatorio
              onStartDateChange={setStartDate}
              onEndDateChange={setEndDate}
              onConfirm={() => filtrarLacamento(startDate, endDate)}
            />
          </View>

          {/* Resumo de Movimentações */}
          <View style={style.ViewResultsBox}>
            <Text style={style.tittleResultMensal}>
              Resumo de Movimentações
            </Text>
            <Text style={style.textContainer}>
              Lançamento de Entrada: {totalEntradas} peças
            </Text>
            <Text style={style.textContainer}>
              Lançamento de Saída: {totalSaidas} peças
            </Text>
          </View>

          {/* Resumo de Entradas */}
          <View style={style.ViewResultsBox}>
            <Text style={style.tittleResultMensal}>Resumo de Entradas</Text>
            {entradas.map((item, index) => (
              <View key={index} style={style.itemContainer}>
                <Text style={style.textContainer}>
                  Produto: {item.produto?.nome || "Desconhecido"}
                </Text>
                <Text style={style.textContainer}>
                  Quantidade: {item.quantidade}
                </Text>
                <Text style={style.textContainer}>
                  Data de Entrada: {formatDate(item.dataEntrada)}
                </Text>
              </View>
            ))}
          </View>

          {/* Resumo de Saídas */}
          <View style={style.ViewResultsBox}>
            <Text style={style.tittleResultMensal}>Resumo de Saídas</Text>
            {saidas.map((item, index) => (
              <View key={index} style={style.itemContainer}>
                <Text style={style.textContainer}>
                  Produto: {item.produto?.nome || "Desconhecido"}
                </Text>
                <Text style={style.textContainer}>
                  Quantidade: {item.quantidade}
                </Text>
                <Text style={style.textContainer}>
                  Valor Total: R${" "}
                  {(item.quantidade * (item.produto?.preco || 0)).toFixed(2)}
                </Text>
                <Text style={style.textContainer}>
                  Data de Saída: {formatDate(item.dataSaida)}
                </Text>
              </View>
            ))}
          </View>

          {/* Faturamento */}
          <View style={style.ViewResultsBox}>
            <Text style={style.tittleResultMensal}>Faturamento</Text>
            <Text style={style.textContainer}>
              Total Vendido (R$): R$ {totalFaturamento}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

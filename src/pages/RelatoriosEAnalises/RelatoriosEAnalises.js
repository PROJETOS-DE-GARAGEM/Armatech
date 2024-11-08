import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import style from "./RelatoriosEAnalisesStyle";
import Header from "../../components/Header/Header";
import DateRelatorio from "../../components/DateRelatorio/DateRelatorio";
import { ProdutoService } from "../../../service/CasdastrarProdutos";
import { LancamentoService } from "../../../service/LancamentoService";

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
  const fetchData = async (startDate, endDate) => {
    console.log("fetchData chamado com:", { startDate, endDate });
    if (!startDate || !endDate) {
      console.warn("Datas não definidas. Selecione uma data inicial e final.");
      return;
    }

    try {
      const produtosResponse = await produtoService.listarProdutos();
      console.log("Produtos Response:", produtosResponse);

      const lancamentosResponse = await lancamentoService.listarLancamento(
        startDate,
        endDate
      );
      console.log("Lançamentos Response:", lancamentosResponse);

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

      setDados(lancamentosComDetalhes);
      console.log("Dados Enriquecidos:", lancamentosComDetalhes);
    } catch (error) {
      console.log("Erro ao buscar dados:", error);
    }
  };

  // Filtrar lançamentos para entradas e saídas
  const entradas = dados.filter((item) => item.tipo === "ENTRADA");
  const saidas = dados.filter((item) => item.tipo === "SAIDA");

  // Calcula o total de entradas, saídas e faturamento
  const totalEntradas = entradas.reduce((acc, item) => acc + item.quantidade, 0);
  const totalSaidas = saidas.reduce((acc, item) => acc + item.quantidade, 0);
  const totalFaturamento = saidas.reduce(
    (acc, item) => acc + item.quantidade * (item.produto?.preco || 0),
    0
  ).toFixed(2);

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
              onConfirm={() => fetchData(startDate, endDate)}
            />
          </View>

          {/* Resumo de Movimentações */}
          <View style={style.ViewResultsBox}>
            <Text style={style.tittleResultMensal}>Resumo de Movimentações</Text>
            <Text>Lançamento de Entrada: {totalEntradas} peças</Text>
            <Text>Lançamento de Saída: {totalSaidas} peças</Text>
          </View>

          {/* Resumo de Entradas */}
          <View style={style.ViewResultsBox}>
            <Text style={style.tittleResultMensal}>Resumo de Entradas</Text>
            {entradas.map((item, index) => (
              <View key={index}>
                <Text>Produto: {item.produto?.nome || "Desconhecido"}</Text>
                <Text>Quantidade: {item.quantidade}</Text>
                <Text>Data de Entrada: {formatDate(item.dataEntrada)}</Text>
              </View>
            ))}
          </View>

          {/* Resumo de Saídas */}
          <View style={style.ViewResultsBox}>
            <Text style={style.tittleResultMensal}>Resumo de Saídas</Text>
            {saidas.map((item, index) => (
              <View key={index}>
                <Text>Produto: {item.produto?.nome || "Desconhecido"}</Text>
                <Text>Quantidade: {item.quantidade}</Text>
                <Text>Valor Total: R$ {(item.quantidade * (item.produto?.preco || 0)).toFixed(2)}</Text>
                <Text>Data de Saída: {formatDate(item.dataSaida)}</Text>
              </View>
            ))}
          </View>

          {/* Faturamento */}
          <View style={style.ViewResultsBox}>
            <Text style={style.tittleResultMensal}>Faturamento</Text>
            <Text>Total Vendido (R$): R$ {totalFaturamento}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

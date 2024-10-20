import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import style from "./RelatoriosEAnalisesStyle";
import Header from "../../components/Header/Header";

export default function RelatoriosEAnalises({ navigation }) {
  const [dados, setDados] = useState([]);
  return (
    <View style={style.container}>
      <Header titulo="Relatórios e Analises" navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text style={style.tittlePage}>Visão Geral </Text>

        <View style={style.contentResume}>
          {/* Resumo de Movimentações */}
          <View style={style.ViewResultsBox}>
            <View style={style.viewTittleResultMensal}>
              <Text style={style.tittleResultMensal}>Resumo de Movimentações</Text>
            </View>

            <View>
              <Text style={style.tittleTextResults}>Total de Lançamentos:
                <Text style={style.textResult}> 0 Pedidos</Text>
              </Text>

              <Text style={style.tittleTextResults}>Total de Peças:
                <Text style={style.textResult}> 0 Vendidas</Text>
              </Text>
            </View>
          </View>
          {/* Saídas */}
          <View style={style.ViewResultsBox}>
            <View style={style.viewTittleResultMensal}>
              <Text style={style.tittleResultMensal}>Resumo de Saídas</Text>
            </View>

            <View>
              <Text style={style.tittleTextResults}>Short:
                <Text style={style.textResult}> 0 Saídas</Text>
              </Text>

              <Text style={style.tittleTextResults}>Saia:
                <Text style={style.textResult}> 0 Saídas</Text>
              </Text>

              <Text style={style.tittleTextResults}>Calça:
                <Text style={style.textResult}> 0 Saídas</Text>
              </Text>
            </View>
          </View>
          {/* Saídas por Tamanho */}
          <View style={style.ViewResultsBox}>
            <View style={style.viewTittleResultMensal}>
              <Text style={style.tittleResultMensal}>Saídas Tamanho</Text>
            </View>

            <View>
              <Text style={style.tittleTextResults}>PP:
                <Text style={style.textResult}> 0 Saídas</Text>
              </Text>

              <Text style={style.tittleTextResults}>P:
                <Text style={style.textResult}> 0 Saídas</Text>
              </Text>

              <Text style={style.tittleTextResults}>M:
                <Text style={style.textResult}> 0 Saídas</Text>
              </Text>
              <Text style={style.tittleTextResults}>G:
                <Text style={style.textResult}> 0 Saídas</Text>
              </Text>

              <Text style={style.tittleTextResults}>GG:
                <Text style={style.textResult}> 0 Saídas</Text>
              </Text>
            </View>
          </View>
          {/* Faturamento */}
          <View style={style.ViewResultsBox}>
            <View style={style.viewTittleResultMensal}>
              <Text style={style.tittleResultMensal}>Faturamento</Text>
            </View>

            <View>
              <Text style={style.tittleTextResults}>Total Vendido(R$):
                <Text style={style.textResult}> R$0,00</Text>
              </Text>

              <Text style={style.tittleTextResults}>Ticket Médio:
                <Text style={style.textResult}> R$0,00</Text>
              </Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </View >
  );
}
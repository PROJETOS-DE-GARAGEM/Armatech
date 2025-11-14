import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import style from "./AboutStyle";
import Header from "../../components/Header/Header";

export default function About({ navigation }) {
  return (
    <View style={style.container}>
      <Header titulo="About" navigation={navigation} />
      <ScrollView>
        <View>
          <Image
            source={require("../../../assets/images/tela-login.png")}
            style={style.logo}
          />
        </View>
        <View style={style.boxText}>
          <Text style={style.text}>
            Bem-vindo ao ArmaTech, um gerenciador de estoque prático e
            eficiente, desenvolvido com dedicação por cinco estudantes
            tecnologia. Nosso objetivo é simplificar o controle de estoque,
            ajudando o lojista a organizar seus produtos de forma inteligente,
            com ferramentas modernas e fáceis de usar.
          </Text>

          <Text style={style.text}>
            Criado para atender às necessidades de pequenas e médias lojas, o
            app combina funcionalidade e design intuitivo, permitindo cadastrar,
            atualizar, filtrar e gerenciar seus itens com rapidez. Aqui, seu
            estoque está sempre ao alcance das suas mãos!
          </Text>

          <Text style={style.text}>
            Obrigado por confiar no nosso trabalho. Esperamos que o ArmaTech
            facilite sua jornada e seja uma ferramenta indispensável para o
            sucesso do seu negócio!
          </Text>

          <Text style={style.text}>
            Domine todos os recursos disponíveis: O guia definitivo para
            explorar todas as funcionalidades em detalhes.
          </Text>
        </View>

        <View style={style.boxDetails}>
          <View style={style.titleBox}>
            <FontAwesome5 name="box" size={40} color="#283949" />
            <Text style={style.textTitleBox}>Cadastro de Produtos</Text>
          </View>
          <Text style={style.textDetailsBox}>
            A funcionalidade de Cadastro de Produto permite adicionar itens ao
            estoque de forma prática e organizada. Você pode definir o tipo de
            tamanho, registrar o nome, descrição, preço e quantidade inicial,
            garantindo um controle detalhado das variações e do fluxo de
            estoque.
          </Text>
        </View>

        <View style={style.boxDetails}>
          <View style={style.titleBox}>
            <FontAwesome5 name="warehouse" size={40} color="#283949" />
            <Text style={style.textTitleBox}>Gerenciamento de Estoque</Text>
          </View>
          <Text style={style.textDetailsBox}>
            A funcionalidade de Gerenciamento de Estoque oferece uma visão
            completa dos produtos cadastrados no seu inventário. Com ela, você
            pode consultar todos os detalhes dos itens, como nome, descrição,
            tamanho, preço e, claro, a quantidade disponível em estoque. Além de
            acompanhar as informações essenciais, o recurso permite editar os
            detalhes dos produtos ou excluí-los do inventário sempre que
            necessário, proporcionando flexibilidade e controle total sobre seu
            estoque.
          </Text>
        </View>

        <View style={style.boxDetails}>
          <View style={style.titleBox}>
            <FontAwesome5 name="sync" size={40} color="#283949" />
            <Text style={style.textTitleBox}>Lançamentos</Text>
          </View>
          <Text style={style.textDetailsBox}>
            A funcionalidade de Lançamentos permite gerenciar o estoque de forma
            dinâmica e eficiente. Com ela, o usuário pode adicionar unidades aos
            produtos já cadastrados, atualizando o inventário conforme novas
            reposições. Além disso, é possível realizar o lançamento de vendas,
            o que reduz automaticamente a quantidade disponível dos itens,
            mantendo o controle do fluxo de estoque em tempo real.
          </Text>
        </View>

        <View style={style.boxDetails}>
          <View style={style.titleBox}>
            <FontAwesome name="bar-chart-o" size={40} color="#283949" />
            <Text style={style.textTitleBox}>Relatórios e Análises</Text>
          </View>
          <Text style={style.textDetailsBox}>
            A funcionalidade de Relatórios e Análises oferece uma visão
            abrangente de todas as movimentações do seu estoque, com um
            dashboard intuitivo que facilita o acompanhamento do desempenho do
            seu inventário. Através dessa ferramenta, você pode visualizar
            resumos de entradas, saídas e faturamento, tudo filtrado por período
            de data, permitindo um controle detalhado e preciso.
          </Text>
        </View>
        <View style={[style.boxText, { marginBottom: 10, paddingBottom: 10 }]}>
          <Text style={style.text}>
            Com todas essas funcionalidades, nosso aplicativo foi desenvolvido
            para proporcionar uma gestão eficiente e prática do seu inventário.
            Aproveite e maximize o potencial do seu estoque de maneira
            inteligente e ágil.
          </Text>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
          <Text style={[style.text, {fontStyle: 'italic'}]}>
          © 2024 ArmaTech.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

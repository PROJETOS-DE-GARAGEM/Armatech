import React from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";
import Header from "../../components/Header/Header";
import styles from "./TelaMenuStyle";
import HomeSvg from "../../../assets/svg/HomeSvg";
import Footer from "../../components/Footer/Footer";

export default function TelaMenu() {
  return (
    <View style={styles.container}>
      {/* Componente header */}
      <Header titulo="Armatech" />

      {/* componente das telas  */}
      <TouchableOpacity>
        <Text>Tela Menu</Text>
      </TouchableOpacity>

      {/* Componente footer */}
      <Footer/>
    </View>
  );
}



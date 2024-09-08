import React from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";
import Header from "../../components/Header/Header";
import styles from "./TelaMenuStyle";
import BarsSvg from "../../../assets/svg/BarsSvg";

export default function TelaMenu() {
  return (
    <View style={styles.container}>
      <Header titulo="Armatech" />
      <TouchableOpacity>
        <Text>Tela Menu</Text>
      </TouchableOpacity>
    </View>
  );
}



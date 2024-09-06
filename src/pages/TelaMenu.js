import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function TelaMenu() {
  return (
    <View styles={styles.conatiner}>
      <TouchableOpacity>
        <Image
        
        />
        <Text>Tela Menu</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
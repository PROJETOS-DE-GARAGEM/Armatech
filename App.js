import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Navegação Global Navigation */}
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

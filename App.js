import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaLogin from './src/pages/TelaLogin';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaLogin/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#283949',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

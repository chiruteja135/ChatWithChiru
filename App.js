import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { lineHeight: 20,fontSize: 15 }]}>Hi Everyone!</Text>
      <Text style={[styles.text, { lineHeight: 40,fontSize: 20 }]}>Welcome to MY app </Text>
      <Text style={[styles.text, { lineHeight: 50,fontSize: 35 }]}>"CHAT WITH CHIRU"</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

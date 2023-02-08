import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import React from 'react';

export default function App() {
  async function openWpp() {
    await Linking.openURL(
      'https://wa.me/553588141402?text=Para%20conversar%20com%20o%20Hygia%20Bot%20basta%20enviar%20uma%20mensagem%20da%20seguinte%20forma%3A%0A%0A%2Fhygia%20sua%20dúvida',
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contactBtn} onPress={openWpp}>
        <Text style={styles.title}>Contato</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactBtn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#00aaff',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fafafa',
  },
});

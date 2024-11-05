import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AperturaCajaScreen() {
  const [montoInicial, setMontoInicial] = useState('');

  const handleApertura = () => {
    Alert.alert('Caja Abierta', `Monto inicial: ${montoInicial}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apertura de Caja</Text>
      <Text style={styles.label}>Empleado:</Text>
      <Text style={styles.label}>Fecha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Monto Inicial"
        keyboardType="numeric"
        value={montoInicial}
        onChangeText={setMontoInicial}
      />
      <Button title="Abrir Caja" onPress={handleApertura} color="#1D4ED8" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00A3FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    borderRadius: 5,
  },
});

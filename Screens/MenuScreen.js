import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Apertura de Caja" onPress={() => navigation.navigate('AperturaCaja')} />
      <Button title="Cierre de Caja" onPress={() => navigation.navigate('CierreCaja')} />
      <Button title="Compras" onPress={() => Alert.alert("Funcionalidad en desarrollo")} />
      <Button title="Ventas" onPress={() => Alert.alert("Funcionalidad en desarrollo")} />
      <Button title="Control de Stock" onPress={() => Alert.alert("Funcionalidad en desarrollo")} />
      <Button title="Cerrar sesión" onPress={() => auth().signOut()} color="#1D4ED8" />
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
});

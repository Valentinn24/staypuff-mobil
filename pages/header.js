import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/styles';

function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Button title="Caja" onPress={() => {}} />
      <Button title="Empleados" onPress={() => {}} />
      <Button title="Productos" onPress={() => {}} />
      <Button title="Compras" onPress={() => {}} />
      <Button title="Proveedores" onPress={() => {}} />
      <Button title="Ventas" onPress={() => {}} />
      <Button title="Registrar Usuario" onPress={() => navigation.navigate('RegisterUser')} />
      <Button title="Cerrar Sesión" onPress={() => navigation.navigate('Login')} color='red' style={styles.logoutButton} />

    </View>
    
  );
}

export default Header;

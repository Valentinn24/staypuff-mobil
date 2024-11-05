import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image } from 'react-native';
import styles from '../assets/styles';
import Header from './header';

function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [apellido, setApellido] = useState('');
  const [password, setPassword] = useState('');
  const [direccion, setDireccion] = useState('');
  const [correo, setCorreo] = useState('');

  const handleRegister = () => {
    if (username && password && apellido && direccion && correo) {
      navigation.navigate('Menu');
    } else {
      Alert.alert('Error', 'Por favor completa todos los campos');
    }
  };
  const handleGoBack = () => {
    navigation.navigate('Menu');
  };
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.backgroundImage} />
        <TextInput 
          style={[styles.input, styles.absoluteInput1]} 
          placeholder="Username" 
          value={username} 
          onChangeText={setUsername} 
        />
        <TextInput 
          style={[styles.input, styles.absoluteInput2]} 
          placeholder="Apellido" 
          value={apellido} 
          onChangeText={setApellido} 
        />
        <TextInput 
          style={[styles.input, styles.absoluteInput3]} 
          placeholder="Dirección" 
          value={direccion} 
          onChangeText={setDireccion} 
        />
        <TextInput 
          style={[styles.input, styles.absoluteInput4]} 
          placeholder="Correo" 
          value={correo} 
          onChangeText={setCorreo} 
        />
        <TextInput 
          style={[styles.input, styles.absoluteInput5]} 
          placeholder="Password" 
          value={password} 
          secureTextEntry 
          onChangeText={setPassword} 
        />
         <View style={styles.registerButtonContainer}>
          <Button 
            title="Registrar" 
            onPress={handleRegister}
          />
        </View>
      </View>
      <View style={styles.backButton}>
        <Button 
          title="Volver al Menu" 
          onPress={() => navigation.navigate('Menu')} 
          color="#98e0fc"
        />
      </View>
    </>
    
  );
}

export default Register;

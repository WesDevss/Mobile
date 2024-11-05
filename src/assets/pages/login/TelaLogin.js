import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../../assets/components/Logo/Logo';

const CustomAlert = ({ message, onClose }) => (
  <View style={styles.alertContainer}>
    <Text style={styles.alertMessage}>{message}</Text>
    <TouchableOpacity style={styles.alertButton} onPress={onClose}>
      <Text style={styles.alertButtonText}>Fechar</Text>
    </TouchableOpacity>
  </View>
);

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      setAlertMessage('Por favor, preencha todos os campos.');
      return;
    }

    const usuario = await AsyncStorage.getItem(email);
    if (!usuario) {
      setAlertMessage('Usuário não encontrado.');
      return;
    }

    const dadosUsuario = JSON.parse(usuario);
    if (dadosUsuario.senha !== senha) {
      setAlertMessage('Senha incorreta.');
      return;
    }

    setAlertMessage('Login realizado com sucesso!');
    setTimeout(() => {
      navigation.navigate('Home');  // Navegar para a tela inicial após login bem-sucedido
    }, 1000); // 1 segundo de delay para mostrar a mensagem
  };

  return (
    <View style={styles.container}>
      <Logo />  {/* Exibindo a Logo */}
      <Text style={styles.logo}>Seja Bem-Vindo!</Text>
      <TextInput 
        placeholder="E-mail" 
        style={styles.input} 
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        placeholder="Senha" 
        secureTextEntry 
        style={styles.input} 
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      {alertMessage ? (
        <CustomAlert message={alertMessage} onClose={() => setAlertMessage('')} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#74543B',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#4CAF50', // Cor verde para o botão
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff', // Texto branco para contraste
    fontWeight: 'bold',
  },
  alertContainer: {
    position: 'absolute',
    top: '40%',
    left: '10%',
    right: '10%',
    backgroundColor: '#f8d7da',
    borderWidth: 1,
    borderColor: '#f5c6cb',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  alertMessage: {
    color: '#721c24',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',  
  },
  alertButton: {
    backgroundColor: '#f5c6cb',
    padding: 5,
    borderRadius: 5,
  },
  alertButtonText: {
    color: '#721c24',
    fontWeight: 'bold',
  },
});

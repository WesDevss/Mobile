import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../../assets/components/Logo/Logo';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

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

  // Placeholder para o login com Google
  const handleGoogleLogin = async () => {
    setAlertMessage("Função de login com Google em desenvolvimento.");
  };

  // Placeholder para o login com Facebook
  const handleFacebookLogin = async () => {
    setAlertMessage("Função de login com Facebook em desenvolvimento.");
  };

  // Função de login com validação local
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
      navigation.navigate('Home');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Logo />
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

      {/* Botões de login social */}
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#ff0000' }]} onPress={handleGoogleLogin}>
          <AntDesign name="google" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]} onPress={handleFacebookLogin}>
          <FontAwesome name="facebook" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Opções de "Esqueci minha senha" e "Cadastre-se" */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
          <Text style={styles.footerText}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.footerText}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
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
    borderColor: '#000000',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#EEC77C',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
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
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
});

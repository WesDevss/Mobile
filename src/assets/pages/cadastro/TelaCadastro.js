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

export default function TelaCadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;  // Expressão regular simples para validação de e-mail
    return re.test(email);
  };

  const handleCadastro = async () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      setAlertMessage('Por favor, preencha todos os campos.');
      setIsSuccess(false);
      return;
    }

    if (!validateEmail(email)) {
      setAlertMessage('Por favor, insira um e-mail válido.');
      setIsSuccess(false);
      return;
    }

    if (senha !== confirmarSenha) {
      setAlertMessage('As senhas não coincidem.');
      setIsSuccess(false);
      return;
    }

    const usuarioExistente = await AsyncStorage.getItem(email);
    if (usuarioExistente) {
      setAlertMessage('Já existe uma conta com este e-mail.');
      setIsSuccess(false);
      return;
    }

    await AsyncStorage.setItem(email, JSON.stringify({ nome, senha }));
    setAlertMessage('Cadastro realizado com sucesso!');
    setIsSuccess(true);
    setTimeout(() => {
      navigation.navigate('Login'); // Navegar após um pequeno delay
    }, 1000); // 1 segundo de delay para mostrar a mensagem
  };

  return (
    <View style={styles.container}>
      <Logo />  {/* Exibindo a Logo */}
      <Text style={styles.logo}>Faça Parte da Nossa Comunidade</Text>
      <TextInput 
        placeholder="Nome Completo" 
        style={styles.input} 
        value={nome}
        onChangeText={setNome}
      />
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
      <TextInput 
        placeholder="Confirme sua senha" 
        secureTextEntry 
        style={styles.input} 
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />
      <TouchableOpacity style={styles.cadastroButton} onPress={handleCadastro}>
        <Text style={styles.cadastroButtonText}>Cadastre-se</Text>
      </TouchableOpacity>

      {alertMessage ? (
        <CustomAlert message={alertMessage} onClose={() => { setAlertMessage(''); setIsSuccess(false); }} />
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
    borderColor: '#000000',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  cadastroButton: {
    backgroundColor: '#EEC77C', // Cor verde para o botão
    padding: 15,
    borderColor: '#000000',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  cadastroButtonText: {
    color: '#fff', // Texto branco para contraste
    borderColor: '#000000',
    fontWeight: 'bold',
  },
  alertContainer: {
    position: 'static',
    top: '50%',
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
    borderColor: '#000000',
    marginBottom: 10,
    textAlign: 'center',  
  },
  alertButton: {
    backgroundColor: '#f5c6cb',
    padding: 5,
    borderColor: '#000000',
    borderRadius: 5,
  },
  alertButtonText: {
    color: '#721c24',
    borderColor: '#000000',
    fontWeight: 'bold',
  },
});

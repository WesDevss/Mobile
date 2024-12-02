import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
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
  const [cpf, setCpf] = useState('');
  const [cidade, setCidade] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateCPF = (cpf) => {
    return cpf.length === 11;
  };

  const handleCadastro = async () => {
    if (!nome || !email || !senha || !confirmarSenha || !cpf || !cidade) {
      setAlertMessage('Por favor, preencha todos os campos.');
      setIsSuccess(false);
      return;
    }

    if (!validateEmail(email)) {
      setAlertMessage('Por favor, insira um e-mail válido.');
      setIsSuccess(false);
      return;
    }

    if (!validateCPF(cpf)) {
      setAlertMessage('Por favor, insira um CPF válido.');
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

    // Salva todos os dados do usuário, incluindo o e-mail
    await AsyncStorage.setItem(email, JSON.stringify({ nome, email, senha, cpf, cidade }));
    setAlertMessage('Cadastro realizado com sucesso!');
    setIsSuccess(true);
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Logo />
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
        placeholder="CPF" 
        style={styles.input} 
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <Text style={styles.pickerLabel}>Escolha sua cidade:</Text>
      <Picker
        selectedValue={cidade}
        onValueChange={(itemValue) => setCidade(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione uma cidade" value="" />
        <Picker.Item label="São Luís" value="sao_luis" />
        <Picker.Item label="Bacabeira" value="bacabeira" />
        <Picker.Item label="Arari" value="arari" />
        <Picker.Item label="Viana" value="viana" />
      </Picker>
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
  pickerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  picker: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 20,
  },
  cadastroButton: {
    backgroundColor: '#EEC77C',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  cadastroButtonText: {
    color: '#fff',
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

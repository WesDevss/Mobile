import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Defina os dados que você quer para fazer o login direto (ID, Nome e Senha)
    const usuario = {
      id: 'admin123',  // ID do admin
      nome: 'Admin',   // Nome do admin
      senha: 'admin123'  // Senha do admin
    };

    // Verifica se o login é válido (só para testar)
    if (id === usuario.id && nome === usuario.nome && senha === usuario.senha) {
      // Redireciona para a tela de administração
      navigation.navigate('Admin');
    } else {
      alert('Credenciais inválidas!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login de Administrador</Text>

      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

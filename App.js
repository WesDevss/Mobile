import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './src/assets/pages/login/TelaLogin';
import TelaCadastro from './src/assets/pages/cadastro/TelaCadastro';
import TelaHome from './src/assets/pages/home/TelaHome';
import TelaInicial from './src/assets/pages/inicial/TelaInicial';
import TelaPagamento from './src/assets/pages/pagamentos/TelaPagamento';
import TelaInscricao from './src/assets/pages/inscricao/TelaInscricao';
import TelaConfiguracoes from './src/assets/pages/configuracoes/TelaConfiguracoes'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={TelaInicial} />
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Home" component={TelaHome} />
        <Stack.Screen name="Pagamentos" component={TelaPagamento} />
        <Stack.Screen name="Inscricao" component={TelaInscricao} />
        <Stack.Screen name="Configuracoes" component={TelaConfiguracoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

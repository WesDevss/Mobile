import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './src/assets/pages/login/TelaLogin';
import TelaCadastro from './src/assets/pages/cadastro/TelaCadastro';
import TelaHome from './src/assets/pages/home/TelaHome';
import TelaInicial from './src/assets/pages/inicial/TelaInicial';
import TelaDetalhesCampeonato from './src/assets/pages/infcamp/TelaDetalhesCampeonato';
import TelaPerfil from './src/assets/pages/perfilusu/TelaPerfil';
import TelaConfiguracoes from './src/assets/pages/config/TelaConfiguracoes';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={TelaInicial} />
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Home" component={TelaHome} />
        <Stack.Screen name="DetalhesCampeonato" component={TelaDetalhesCampeonato} />
        <Stack.Screen name="Perfil" component={TelaPerfil} />
        <Stack.Screen name="Configuracoes" component={TelaConfiguracoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

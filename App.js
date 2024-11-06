import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TelaLogin from './src/assets/pages/login/TelaLogin';
import TelaCadastro from './src/assets/pages/cadastro/TelaCadastro';
import TelaHome from './src/assets/pages/home/TelaHome';
import TelaInicial from './src/assets/pages/inicial/TelaInicial';
import TelaPagamento from './src/assets/pages/pagamentos/TelaPagamento';
import TelaInscricao from './src/assets/pages/inscricao/TelaInscricao';
import TelaConfiguracoes from './src/assets/pages/configuracoes/TelaConfiguracoes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Crie o Bottom Tab Navigator para a Home
function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Pagamentos') {
            iconName = 'payment';
          } else if (route.name === 'Inscricao') {
            iconName = 'assignment';
          } else if (route.name === 'Configuracoes') {
            iconName = 'settings';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={TelaHome} />
      <Tab.Screen name="Pagamentos" component={TelaPagamento} />
      <Tab.Screen name="Inscricao" component={TelaInscricao} />
      <Tab.Screen name="Configuracoes" component={TelaConfiguracoes} />
    </Tab.Navigator>
  );
}

// Configuração principal de navegação com o Stack Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={TelaInicial} />
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Home" component={TelaHome} />
        {/* Quando o usuário chega na TelaHome, ele vê as tabs */}
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }} // Opcional: remove o header da tela Home com tabs
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

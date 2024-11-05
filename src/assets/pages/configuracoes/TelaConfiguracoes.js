// src/assets/pages/configuracoes/TelaConfiguracoes.js

import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function TelaConfiguracoes() {
  const [notificacoes, setNotificacoes] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Notificações</Text>
        <Switch
          value={notificacoes}
          onValueChange={() => setNotificacoes(!notificacoes)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  settingText: {
    fontSize: 18,
  },
});

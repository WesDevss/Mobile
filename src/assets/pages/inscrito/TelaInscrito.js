import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function TelaInscrito() {
  // Dados fictícios de inscrição para exibição; substitua isso com os dados reais do usuário
  const inscrito = [
    {
      id: 1,
      evento: 'Campeonato de Bacabeira',
      data: '18/10/2024',
      horario: '15:00 – 17:00',
      statusPagamento: 'Pago',
      valor: 'R$ 20,00',
    },
    {
      id: 2,
      evento: 'Campeonato de São Luís',
      data: '25/11/2024',
      horario: '14:00 – 16:00',
      statusPagamento: 'Pendente',
      valor: 'R$ 30,00',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Minhas Inscrições</Text>
      
      {inscrito.map((inscricao) => (
        <View key={inscricao.id} style={styles.card}>
          <Text style={styles.eventName}>{inscricao.evento}</Text>
          <Text style={styles.detail}>Data: {inscricao.data}</Text>
          <Text style={styles.detail}>Horário: {inscricao.horario}</Text>
          <Text style={styles.detail}>Valor: {inscricao.valor}</Text>
          <Text style={[styles.status, { color: inscricao.statusPagamento === 'Pago' ? '#34a853' : '#ea4335' }]}>
            Status do Pagamento: {inscricao.statusPagamento}
          </Text>

          {/* Botão para mais detalhes ou gerenciamento da inscrição */}
          <TouchableOpacity style={styles.detailButton}>
            <Text style={styles.detailButtonText}>Ver detalhes</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0e6df',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 2,
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666',
  },
  status: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  detailButton: {
    backgroundColor: '#4285f4',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  detailButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

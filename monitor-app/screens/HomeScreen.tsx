import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { buscarServidores } from '../services/serverService';
import { Server } from '../types/Server';
import ServerCard from '../components/ServerCard';

export default function HomeScreen() {
  const [servidores, setServidores] = useState<Server[]>([]);

  const carregarServidores = async () => {
    try {
      const dados = await buscarServidores();
      console.log('Servidores:', dados);
      setServidores(dados);
    }
    catch (error) {
      console.error('Erro ao carregar servidores:', error);
      setServidores([]);
    }
  }

  useEffect(() => {
    carregarServidores();

    const tempoAtt = setInterval(() => {
      carregarServidores();
    }, 5000);

    return () => clearInterval(tempoAtt); //reseta o contador
  }, []);

  if (servidores.length === 0) {
      return (
        <View>
          <Text>Nenhum servidor encontrado</Text>
        </View>
      )
  }

  if (servidores === null || servidores === undefined) {
      return (
        <View>
          <Text>Erro no servidor</Text>
        </View>
      )
  }

  return (
    <ScrollView>
      <TouchableOpacity style={styles.button} onPress={carregarServidores}>
        <Text style={styles.textoBotao}>Atualizar</Text>
      </TouchableOpacity>

      {servidores.map((servidor) => (
        <ServerCard key={servidor.id} servidor={servidor} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    margin: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  }
})
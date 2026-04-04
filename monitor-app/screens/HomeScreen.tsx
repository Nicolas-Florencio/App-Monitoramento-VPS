import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { buscarServidores } from '../services/serverService';
import { Server } from '../types/Server';
import ServerCard from '../components/ServerCard';

export default function HomeScreen() {
  const [servidores, setServidores] = useState<Server[]>([]);

  useEffect(() => {
    async function carregar() {
      const dados = await buscarServidores();
      console.log('Servidores:', dados);
      setServidores(dados);
    }

    carregar();
  }, []);

  return (
    <View>
      {servidores.map((servidor) => (
        <ServerCard key={servidor.id} servidor={servidor} />
      ))}
    </View>
  );
}
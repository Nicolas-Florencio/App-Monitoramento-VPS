import { Server } from "../types/Server";
import { View, Text, StyleSheet } from "react-native";

export default function ServerCard({ servidor }: { servidor: Server }) {
  const getStatusColor = () => {
    switch (servidor.status) {
      case "online":
        return "#4CAF50"; // verde
      case "offline":
        return "#F44336"; // vermelho
      case "site caiu":
        return "#FF9800"; // laranja
      default:
        return "#999";
    }
  };
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{servidor.nome}</Text>
      <Text style={[styles.status, { color: getStatusColor() }]}>
        {servidor.status}
      </Text>
      <Text style={styles.texto}>IP: {servidor.ip ?? "-"}</Text>

      <Text style={styles.texto}>URL: {servidor.url ?? "-"}</Text>

      <Text style={styles.texto}>Ping IP: {servidor.pingLatencia ?? "-"} ms</Text>
      <Text style={styles.texto}>Ping HTTP: {servidor.httpLatencia ?? "-"} ms</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 10,
    borderWidth: 8,
    borderColor: "#333",
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },

  status: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },

  texto: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 4,
  },
});

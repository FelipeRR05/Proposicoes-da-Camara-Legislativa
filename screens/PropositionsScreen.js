import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator, RefreshControl } from 'react-native';
import PropositionCard from '../components/PropositionCard';

const API_URL = 'https://dadosabertos.camara.leg.br/api/v2/proposicoes';

export default function PropositionsScreen({
  propositions,
  setPropositions,
  userVotes,
  setUserVotes,
}) {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPropositions = async () => {
    try {
      const response = await fetch(`${API_URL}?pagina=1&itens=10`);
      const data = await response.json();

      if (data.dados) {
        const enrichedData = data.dados.map((item) => ({
          ...item,
          agreeCount: Math.floor(Math.random() * 100), // Simula votos
          disagreeCount: Math.floor(Math.random() * 100), // Simula votos
        }));
        setPropositions(enrichedData);
      }
    } catch (error) {
      console.error('Erro ao buscar proposições:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchPropositions();
  }, []);

  const handleVote = (proposition, agree) => {
    const updatedVotes = { ...userVotes, [proposition.id]: agree };
    setUserVotes(updatedVotes);
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchPropositions();
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4caf50" />
        <Text style={styles.loadingText}>Carregando proposições...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={propositions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PropositionCard proposition={item} onVote={handleVote} />
        )}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  listContainer: {
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
});

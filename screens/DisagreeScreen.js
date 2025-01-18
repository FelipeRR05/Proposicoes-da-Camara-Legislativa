import { View, FlatList, StyleSheet, Text } from 'react-native';
import PropositionCard from '../components/PropositionCard';

export default function DisagreeScreen({ propositions = [], userVotes = {} }) {
  const filteredPropositions = propositions.filter(
    (item) => userVotes[item.id] === false
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredPropositions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PropositionCard proposition={item} />}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Você ainda não discordou de nenhuma proposição.</Text>
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
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
});

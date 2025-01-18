import { View, Text, StyleSheet, Button } from 'react-native';

const PropositionCard = ({ proposition, onVote }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{proposition.ementa}</Text>
      <Text style={styles.info}>ID: {proposition.id}</Text>
      <Text style={styles.info}>Ano: {proposition.ano}</Text>
      <Text style={styles.info}>
        Concordam: {proposition.agreeCount} | Discordam: {proposition.disagreeCount}
      </Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Concordo"
          onPress={() => onVote(proposition, true)}
          color="#4caf50"
        />
        <Button
          title="Discordo"
          onPress={() => onVote(proposition, false)}
          color="#f44336"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default PropositionCard;

import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class CommentsScreen extends React.Component {
  constructor() {
    super();
    this.state = { comments: [], loading: true, error: '' };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      const comments = await response.json();
      this.setState({ comments, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { comments, loading, error } = this.state;
    if (loading) return <View style={styles.centered}><ActivityIndicator size="large" color="#1264a3" /></View>;
    if (error) return <View style={styles.centered}><Text style={styles.error}>{error}</Text></View>;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={this.props.onBack}>
          <Text style={styles.backText}>← Resources</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Comments</Text>
        <FlatList
          data={comments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.id}>#{item.id}</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb', paddingHorizontal: 16 },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  title: { color: '#17364d', fontSize: 38, fontWeight: '800', paddingVertical: 10 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dde5eb',
    padding: 14,
    marginBottom: 10,
  },
  id: { color: '#1264a3', fontWeight: '700', marginBottom: 4 },
  name: { color: '#17364d', fontSize: 17, fontWeight: '700', marginBottom: 4 },
  body: { color: '#17364d', fontSize: 15 },
  error: { color: '#b00020', fontSize: 16 },
  backButton: { marginVertical: 10 },
  backText: { color: '#1264a3', fontSize: 16 },
});

export default CommentsScreen;

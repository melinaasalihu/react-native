import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class PhotosScreen extends React.Component {
  constructor() {
    super();
    this.state = { photos: [], loading: true, error: '' };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      const photos = await response.json();
      this.setState({ photos, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { photos, loading, error } = this.state;

    if (loading) {
      return (
        <SafeAreaView style={styles.centered}>
          <ActivityIndicator size="large" color="#1264a3" />
        </SafeAreaView>
      );
    }

    if (error) {
      return (
        <SafeAreaView style={styles.centered}>
          <Text style={styles.error}>{error}</Text>
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={this.props.onBack}>
          <Text style={styles.backText}>← Resources</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Photos</Text>

        <FlatList
          data={photos}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{ uri: item.thumbnailUrl }}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={styles.photoTitle} numberOfLines={2}>{item.title}</Text>
              <Text style={styles.id}>#{item.id}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb', paddingHorizontal: 16 },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  backButton: { paddingTop: 12, paddingBottom: 4 },
  backText: { color: '#1264a3', fontSize: 16, fontWeight: '600' },
  title: {
    color: '#17364d',
    fontSize: 38,
    fontWeight: '800',
    paddingVertical: 12,
  },
  list: { paddingBottom: 24 },
  row: { justifyContent: 'space-between' },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 14,
    padding: 8,
    borderWidth: 1,
    borderColor: '#dde5eb',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
  },
  photoTitle: {
    color: '#17364d',
    fontSize: 14,
    marginTop: 8,
    minHeight: 34,
  },
  id: {
    color: '#1264a3',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 4,
  },
  error: { color: '#b00020', fontSize: 16 },
});

export default PhotosScreen;

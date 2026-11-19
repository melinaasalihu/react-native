import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const resources = [
  { id: '1', name: '/posts', count: '100 posts', icon: '▤' },
  { id: '2', name: '/comments', count: '500 comments', icon: '◫' },
  { id: '3', name: '/albums', count: '100 albums', icon: '▣' },
  { id: '4', name: '/photos', count: '5000 photos', icon: '▧' },
  { id: '5', name: '/todos', count: '200 todos', icon: '✓' },
  { id: '6', name: '/users', count: '10 users', icon: '◉' },
];

export default function ResourcesScreen({ onSelectResource }) {
  const [selectedResource, setSelectedResource] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const openResource = async (resource) => {
    setSelectedResource(resource);
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com${resource.name}`);
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }
      const data = await response.json();
      setItems(data);
    } catch (requestError) {
      setError(requestError.message);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const getItemTitle = (item) => {
    if (item.title) return item.title;
    if (item.name) return item.name;
    if (item.email) return item.email;
    return item.id ? `Item ${item.id}` : 'Item';
  };

  if (selectedResource) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              setSelectedResource(null);
              setItems([]);
              setError('');
            }}
          >
            <Text style={styles.backText}>← Resources</Text>
          </TouchableOpacity>

          <View style={styles.headingWrap}>
            <Text style={styles.title}>{selectedResource.name}</Text>
          </View>

          {loading && <ActivityIndicator size="large" color="#1264a3" style={styles.loader} />}
          {!!error && <Text style={styles.error}>{error}</Text>}

          {!loading && !error && (
            <FlatList
              data={items}
              keyExtractor={(item) => String(item.id)}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.detailList}
              renderItem={({ item }) => (
                <View style={styles.detailCard}>
                  <Text style={styles.itemId}>#{item.id}</Text>
                  <Text style={styles.itemTitle}>{getItemTitle(item)}</Text>
                </View>
              )}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.headingWrap}>
          <Text style={styles.title}>Resources</Text>
        </View>

        <FlatList
          data={resources}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.row}
              onPress={() => onSelectResource(item.name)}
            >
              <View style={styles.iconBox}>
                <Text style={styles.icon}>{item.icon}</Text>
              </View>
              <View style={styles.textBox}>
                <Text style={styles.link}>{item.name}</Text>
                <Text style={styles.count}>{item.count}</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f7f9fb' },
  container: { flex: 1, paddingHorizontal: 20 },
  headingWrap: {
    borderBottomWidth: 1,
    borderBottomColor: '#dfe5ea',
    paddingTop: 12,
    paddingBottom: 20,
  },
  title: { color: '#17364d', fontSize: 38, fontWeight: '800' },
  description: {
    color: '#17364d',
    fontSize: 17,
    lineHeight: 24,
    marginTop: 22,
    marginBottom: 16,
  },
  list: { paddingBottom: 30 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dde5eb',
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e6f2f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { color: '#1264a3', fontSize: 24, fontWeight: '800' },
  textBox: { flex: 1, marginLeft: 14 },
  link: { color: '#1264a3', fontSize: 19, fontWeight: '700' },
  count: { color: '#607586', fontSize: 15, marginTop: 3 },
  arrow: { color: '#1264a3', fontSize: 34, lineHeight: 34 },
  backButton: { paddingTop: 12, paddingBottom: 10 },
  backText: { color: '#1264a3', fontSize: 17, fontWeight: '600' },
  loader: { marginTop: 30 },
  error: { color: '#b00020', fontSize: 16, marginTop: 20 },
  detailList: { paddingTop: 12, paddingBottom: 30 },
  detailCard: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingVertical: 14,
  },
  itemId: { color: '#1264a3', fontSize: 14, fontWeight: '700', marginBottom: 4 },
  itemTitle: { color: '#17364d', fontSize: 17 },
});

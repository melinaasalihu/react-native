import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import products from '../assets/products.json';
import Product from '../components/Product';

export default function ProductsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Makeup Products</Text>
        <Text style={styles.subtitle}>{products.length} products available</Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Product product={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
  },
  title: {
    color: '#17233C',
    fontSize: 32,
    fontWeight: '800',
  },
  subtitle: {
    color: '#728096',
    fontSize: 15,
    marginTop: 4,
  },
  list: {
    paddingTop: 6,
    paddingBottom: 24,
  },
});

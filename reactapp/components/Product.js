import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Product = ({ product }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{product.description}</Text>
        <Text style={styles.price}>€{product.price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  imageContainer: {
    width: 82,
    height: 82,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#EEF4FF',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  info: { flex: 1, marginLeft: 14 },
  category: {
    color: '#6781A4',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  name: {
    color: '#17233C',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 2,
  },
  description: {
    color: '#6A7485',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
  },
  price: {
    color: '#246BFE',
    fontSize: 17,
    fontWeight: '800',
    marginTop: 6,
  },
});

export default Product;

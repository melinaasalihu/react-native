import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProjectCard = ({ title, subtitle, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 220,
    backgroundColor: '#edf7ff',
    borderRadius: 12,
    overflow: 'hidden',
    marginLeft: 18,
  },
  image: {
    width: '100%',
    height: 120,
    backgroundColor: '#dfeef7',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  subtitle: {
    fontSize: 12,
    color: '#444',
    paddingHorizontal: 10,
    paddingBottom: 12,
  },
});

export default ProjectCard;


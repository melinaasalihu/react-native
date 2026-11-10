import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ProjectCard from '../components/project';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.back}>←</Text>
        <Text style={styles.title}>App</Text>
      </View>

      <View style={styles.blueBox}>
        <Image source={require('../assets/a.jpg')} style={styles.avatar} />

        <View style={styles.card}>
          <Text style={styles.name}>JOHN DOE</Text>
          <Text style={styles.role}>UI/UX Designer</Text>
          <Text style={styles.bio}>We’re passionate about creating beautiful designs for startups & leading brands</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>HIRE HIM</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.section}>PROJECTS</Text>
        <Text style={styles.link}>View All</Text>
      </View>

      <ProjectCard
        title="Learn from Industry Experts"
        subtitle="Digital design course"
        image={require('../assets/a.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dff3f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 8,
    backgroundColor: '#f5f5f5',
  },
  back: {
    fontSize: 28,
    marginRight: 12,
    color: '#111',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111',
  },
  blueBox: {
    backgroundColor: '#7fcfe8',
    paddingTop: 20,
    paddingBottom: 24,
    alignItems: 'center',
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: -24,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#eee',
  },
  card: {
    width: '82%',
    backgroundColor: '#f2f2f2',
    borderRadius: 18,
    padding: 18,
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
    marginBottom: 6,
  },
  role: {
    fontSize: 18,
    marginBottom: 10,
    color: '#222',
  },
  bio: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 18,
  },
  button: {
    backgroundColor: '#f4d25d',
    paddingHorizontal: 36,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 12,
  },
  section: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111',
  },
  link: {
    fontSize: 16,
    color: '#111',
    fontWeight: '600',
  },
});

export default ProfileScreen;


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StudentInfo = ({ name, surname, birthday, hobbies = [] }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>First Name: {name}</Text>
      <Text style={styles.text}>Surname: {surname}</Text>
      <Text style={styles.text}>Birthday Date: {birthday}</Text>

      <Text style={styles.subtitle}>Hobbies:</Text>
      {hobbies.map((hobby, index) => (
        <Text key={`${name}-${index}`} style={styles.hobby}>• {hobby}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    color: '#222831',
    marginVertical: 4,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#30475E',
    marginTop: 10,
    marginBottom: 5,
  },
  hobby: {
    fontSize: 17,
    color: '#222831',
    backgroundColor: '#DDEBF7',
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
});

export default StudentInfo;

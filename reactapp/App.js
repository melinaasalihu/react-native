import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import ButtonScreen from './screens/ButtonScreen';
// import StudentInfoScreen from './screens/studentinfoScreen';

export default function App() {
  return <ButtonScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



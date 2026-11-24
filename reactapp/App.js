import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import CountriesScreen from './screens/CountriesScreen';  

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState(null);

  const screens = {
    Countries: CountriesScreen,
  };

  if (selectedScreen) {
    const SelectedScreen = screens[selectedScreen];
    return <SelectedScreen onBack={() => setSelectedScreen(null)} />;
  }

  return <CountriesScreen onSelectCountry={setSelectedScreen} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



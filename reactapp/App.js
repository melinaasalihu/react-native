import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import ResourcesScreen from './screens/ResourcesScreen';
import PostScreen from './screens/PostScreen';
import CommentsScreen from './screens/CommentsScreen';
import AlbumsScreen from './screens/AlbumsScreen';
import PhotosScreen from './screens/PhotosScreen';
import TodosScreen from './screens/TodosScreen';
import UsersScreen from './screens/UsersScreen';

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState(null);

  const screens = {
    '/posts': PostScreen,
    '/comments': CommentsScreen,
    '/albums': AlbumsScreen,
    '/photos': PhotosScreen,
    '/todos': TodosScreen,
    '/users': UsersScreen,
  };

  if (selectedScreen) {
    const SelectedScreen = screens[selectedScreen];
    return <SelectedScreen onBack={() => setSelectedScreen(null)} />;
  }

  return <ResourcesScreen onSelectResource={setSelectedScreen} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



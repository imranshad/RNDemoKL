/**
 * React Native Authentication App
 * A complete authentication app with login, signup, and home screens
 * using React Context API for state management
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { AuthProvider } from './src/contexts/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AuthProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </AuthProvider>
  );
}

export default App;

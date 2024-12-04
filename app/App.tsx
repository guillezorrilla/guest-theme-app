import React from 'react';

import { NavigationContainer, ThemeProvider } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import './globals.css';
import { HomeScreen } from './screens/HomeScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { useColorScheme } from './lib/useColorScheme';
import { NAV_THEME } from './lib/constants';

const Stack = createNativeStackNavigator();

const LIGHT_THEME = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME = {
  dark: true,
  colors: NAV_THEME.dark,
};

const App = (): React.JSX.Element => {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <SafeAreaView>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <StatusBar
          barStyle={isDarkColorScheme ? 'light-content' : 'dark-content'}
        />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
